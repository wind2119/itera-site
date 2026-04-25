import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Palette, Code, Bug, Zap, Activity, RefreshCw, Coffee, ChevronRight } from 'lucide-react';

// Компонент "Стеклянная карточка"
const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 hover:border-neonBlue/50 hover:bg-white/10 ${className}`}>
    {children}
  </div>
);

const App = () => {
  const agents = [
    { name: "Архитектор", id: "LLM-G7", icon: <Cpu />, desc: "Проектирует логику и структуру проекта.", color: "from-blue-600" },
    { name: "Дизайнер", id: "Vision-X", icon: <Palette />, desc: "Генеративная эстетика и UI/UX интерфейсы.", color: "from-purple-600" },
    { name: "Разработчик", id: "Code-Flow", icon: <Code />, desc: "Чистый код на Next.js и авто-деплой.", color: "from-cyan-600" },
    { name: "Тестировщик", id: "Debug-Eye", icon: <Bug />, desc: "Мгновенный поиск багов и оптимизация.", color: "from-indigo-600" },
  ];

  const benefits = [
    { title: "Скорость", desc: "Сайт за 48 часов", icon: <Zap /> },
    { title: "Точность", desc: "Пиксельная идеальность", icon: <Activity /> },
    { title: "Эволюция", desc: "Авто-обновление под тренды", icon: <RefreshCw /> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      
      {/* Фоновое свечение */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neonPurple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neonBlue/10 rounded-full blur-[120px]" />
      </div>

      {/* Навигация */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-[0.2em] flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-neonBlue to-neonPurple rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.3)]" />
          <span>ITERA <span className="text-gray-500 font-extralight uppercase">Studio</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-gray-400 font-medium">
          <a href="#" className="hover:text-neonBlue transition-colors">Агенты</a>
          <a href="#" className="hover:text-neonBlue transition-colors">Процесс</a>
          <a href="#" className="hover:text-neonBlue transition-colors">Технологии</a>
        </div>
      </nav>

      {/* Hero Секция */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-4 py-1 border border-neonBlue/30 rounded-full bg-neonBlue/5 text-neonBlue text-[10px] tracking-[0.3em] uppercase mb-8">
              AI Powered Development
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
              Будущее веб-разработки <br />
              <span className="text-neonBlue">автономно.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-white font-normal">Itera Studio:</span> Нейронные сети проектируют, кодят и запускают ваш бизнес, пока вы пьете кофе. <br className="hidden md:block" />
              Ноль ошибок, бесконечная креативность.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-5 bg-neonBlue text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                ЗАПУСТИТЬ ПРОЕКТ
              </button>
              <button className="flex items-center gap-2 px-10 py-5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-bold tracking-wider">
                ИИ-КОМАНДА <ChevronRight size={18} className="text-neonPurple" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Блок Команда Агентов */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold tracking-[0.2em] uppercase mb-4 text-center">Цифровой разум</h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-neonBlue to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(agent.icon, { size: 30, className: "text-white" })}
                </div>
                <h3 className="text-xl font-bold mb-1 tracking-tight">{agent.name}</h3>
                <code className="text-[10px] text-neonBlue mb-4 opacity-60 tracking-widest uppercase">system://{agent.id}</code>
                <p className="text-gray-400 text-sm leading-relaxed">{agent.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Секция "Процесс" */}
      <section className="relative z-10 py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl font-black italic mb-8 tracking-tighter">ITERA</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Название происходит от слова <span className="text-white italic underline decoration-neonBlue underline-offset-4">итерация</span>. Мы не просто создаем — мы совершаем тысячи циклов улучшения за миллисекунды.
              </p>
              <div className="flex items-center gap-4 text-neonBlue font-mono">
                <Coffee size={24} />
                <span className="tracking-widest">ВРЕМЯ ВАШЕГО КОФЕ — ВРЕМЯ НАШЕГО РЕЛИЗА</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Промпт', 'Генерация', 'Тюнинг', 'Релиз'].map((step, i) => (
                <GlassCard key={i} className="p-6 flex flex-col items-center justify-center border-neonBlue/20">
                  <div className="text-4xl font-black text-white/10 mb-2">{i + 1}</div>
                  <div className="font-bold tracking-widest uppercase text-xs text-neonBlue">{step}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-neonBlue mb-6 p-4 bg-neonBlue/5 rounded-full border border-neonBlue/20 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                {React.cloneElement(benefit.icon, { size: 32 })}
              </div>
              <h4 className="text-2xl font-bold mb-3 tracking-tight">{benefit.title}</h4>
              <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Футер */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-neonBlue font-mono text-[10px] tracking-[0.5em] mb-10 uppercase">
            System status: <span className="animate-pulse">Active & Fully Autonomous</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Готовы обновить реальность?</h2>
          <button className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-neonBlue transition-all tracking-widest">
            СВЯЗАТЬСЯ С ИИ
          </button>
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-xs tracking-widest">
            <p>© 2025 ITERA STUDIO. ПОСТРОЕНО НЕЙРОСЕТЯМИ.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">GITHUB</a>
              <a href="#" className="hover:text-white transition-colors">API ACCESS</a>
              <a href="#" className="hover:text-white transition-colors">X / TWITTER</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
