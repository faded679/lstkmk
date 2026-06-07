"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PhoneIcon, UserIcon, ChatTeardropTextIcon, CalendarIcon, MagnifyingGlassIcon, LockIcon } from "@phosphor-icons/react";

interface Lead {
  id: number;
  name: string;
  phone: string;
  comment: string;
  created_at: string;
}

export default function LeadsAdmin() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchLeads = async (pwd: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        headers: { Authorization: `Bearer ${pwd}` }
      });
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads);
        setTotal(data.total);
        setIsAuth(true);
        setError("");
      } else {
        setError(data.error || "Неверный пароль");
      }
    } catch {
      setError("Ошибка соединения");
    } finally {
      setLoading(false);
    }
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads(password);
  };

  const filteredLeads = leads.filter(lead => 
    lead.phone.toLowerCase().includes(search.toLowerCase()) ||
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.comment.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
              <LockIcon className="w-6 h-6 text-accent-blue" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-center mb-2">Админ панель</h1>
          <p className="text-sm text-muted text-center mb-6">Введите пароль для доступа к заявкам</p>
          
          <form onSubmit={login} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              className="w-full px-4 py-3 border border-border rounded-lg focus:border-accent-blue outline-none transition-colors"
            />
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full h-11 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Загрузка..." : "Войти"}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Заявки с сайта</h1>
            <p className="text-sm text-muted">Всего: {total}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск..."
                className="pl-9 pr-4 h-10 border border-border rounded-lg focus:border-accent-blue outline-none transition-colors"
              />
            </div>
            <button
              onClick={() => fetchLeads(password)}
              className="h-10 px-4 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Обновить
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <AnimatePresence>
            {filteredLeads.map((lead) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-border"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-orange/10 rounded-full flex items-center justify-center text-accent-orange font-bold text-sm">
                      #{lead.id}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4 text-muted" />
                        <span className="font-medium">{lead.name || "—"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-accent-blue" />
                        <a 
                          href={`tel:${lead.phone}`}
                          className="text-accent-blue hover:underline font-medium"
                        >
                          {lead.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 md:pl-4 md:border-l border-border">
                    <div className="flex items-start gap-2">
                      <ChatTeardropTextIcon className="w-4 h-4 text-muted mt-0.5" />
                      <p className="text-sm text-muted">
                        {lead.comment || "—"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted md:pl-4">
                    <CalendarIcon className="w-4 h-4" />
                    {formatDate(lead.created_at)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredLeads.length === 0 && (
            <div className="text-center py-12 text-muted">
              {search ? "Ничего не найдено" : "Пока нет заявок"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
