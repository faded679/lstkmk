import dynamic from "next/dynamic";

// Отключаем SSR для 3D конфигуратора
const Configurator3D = dynamic(() => import("./Configurator3D"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-slate-400">Загрузка 3D конфигуратора...</p>
      </div>
    </div>
  ),
});

export default function ConfiguratorPage() {
  return <Configurator3D />;
}
