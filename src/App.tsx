import { motion } from 'motion/react';
import { 
  Landmark, 
  ArrowRight, 
  Star, 
  Award, 
  Target, 
  Shield, 
  MoveRight, 
  BarChart3, 
  FileEdit, 
  GraduationCap,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* TopAppBar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary-container rounded-lg flex items-center justify-center">
              <Landmark className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-800 uppercase">
              寰宇学术
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-indigo-600 font-medium text-sm">首页</a>
            <a href="#" className="text-slate-500 font-medium text-sm hover:text-brand-primary transition-colors">评估工具</a>
            <a href="#" className="text-slate-500 font-medium text-sm hover:text-brand-primary transition-colors">院校名录</a>
            <a href="#" className="text-slate-500 font-medium text-sm hover:text-brand-primary transition-colors">成功案例</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input type="text" placeholder="搜索资源..." className="w-48 pl-10 pr-4 py-1.5 bg-slate-100 border-none rounded-full text-xs focus:ring-2 focus:ring-indigo-500 outline-none" />
              <div className="absolute left-3 top-2 text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm6-2YnyyWVRN1-_M564xxj2uTTy1Wc_CRDzJKixLKCXyyHEMzA8SuIPMPzlIyUbik0HzvJebQoz4irHB3VuVVCB0x8GmDvRjlnTJ8-dNKltgTQ5ZjMyhEw8YZ3Hxss2ZGdgO7XSbOo49BUB9svmNR8zgwnjn_OLB1ZNJg1IzuN8u_hzfqTj0Ez9Qa8x1iNQ74elQD8gvLFY_gmQ3PKxWaFcv4KyTZ7BWMOf0OBp6DxjU9sAyYKyETIXn4tnh83KAD3MlS8B-OLDrX" 
              alt="Profile" 
              className="w-8 h-8 rounded-full border border-slate-200 object-cover"
            />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <a href="#" className="text-brand-primary font-serif font-semibold">首页</a>
            <a href="#" className="text-slate-500 font-serif">评估工具</a>
            <a href="#" className="text-slate-500 font-serif">院校名录</a>
            <a href="#" className="text-slate-500 font-serif">成功案例</a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900/60 z-10" />
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQFtBIEXjgpn82EqBGtpHe0miQ3gdlZfIe-_sqUZ87SvlfHl6RlozB8RxXI2jU1CbsuBZ8uvIBVsypjccwnsHQjvpdXuvj_azePhyv9scIvKfDlrszPMV9yV-okOv3ScjQAxOm-YMDizsARv6i_qDp5Q7z0RfbMA84B-zpCYOUkOSQWkiOA37SryE7vIxBD12iP6XUq4tpmJWtFwDF4VMAOPgW_Sz4IyLmAUXM8Br_3YUXi4PPZCSwdF3dAB2vGZFgxcyEYSz_bMf8" 
              alt="Library Background"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-white text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 py-20 max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-md">
                <Star className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                <span className="text-xs font-semibold uppercase tracking-widest">全球卓越教育咨询</span>
              </div>
              <h1 className="text-5xl md:text-7xl leading-tight font-bold tracking-tight">
                锁定 <span className="text-indigo-400">港三新二</span> <br/>顶级名校录取名额
              </h1>
              <p className="text-slate-200 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
                专家领衔的机构级导师团队，专注香港及新加坡顶尖硕士申请。以临床级的精准度，助您在复杂的国际学术格局中脱颖而出。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-600/20">
                  开始录取评估
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-10 py-4 font-semibold rounded-xl transition-all backdrop-blur-sm">
                  成功案例
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Positioning */}
        <section className="py-24 bg-brand-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-brand-primary-container font-medium">战略学术定位</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                我们独有的评估方法论会对您的申请背景进行深度分类，最大化亚洲顶尖学府的录取率。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Reach Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl text-slate-800 font-bold mb-4">冲刺梯队</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                    目标定位于 HKU, NUS, 和 NTU。针对精英研究与职业网络的“高风险、高回报”申请策略。
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-md w-fit uppercase tracking-wider">前 1% 申请策略</div>
                  <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-md w-fit uppercase tracking-wider">常青藤同等标准</div>
                </div>
              </motion.div>

              {/* Target Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl text-slate-800 font-bold mb-4">核心梯队</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                    针对 HKUST 和 CUHK 进行优化。将您的学术背景与特定院系需求及教授研究兴趣精准匹配。
                  </p>
                </div>
                <button className="text-indigo-600 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all group">
                  查看院校详情 <MoveRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Safety Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-slate-500" />
                  </div>
                  <h3 className="text-xl text-slate-800 font-bold mb-4">保底梯队</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                    建立稳健的录取基线，确保无论市场波动如何，您都能实现全球层面的学术跃迁。
                  </p>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 w-2/3" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                  78% 稳健指数
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Evaluation Tool Preview */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl leading-tight font-bold tracking-tight">
                行业金标准 <br/><span className="text-indigo-400">录取模拟评估工具</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-normal">
                我们的数据驱动评估系统可精准模拟大学录取委员会的评审。您将获得一份长达20页的深度报告，详细分析您的竞争优势。
              </p>
              <div className="space-y-8 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
                    <BarChart3 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">录用概率统计</h4>
                    <p className="text-slate-500 text-sm">实时对比过去5年的录取大数据进行精准匹配。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
                    <FileEdit className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">文书语义优化</h4>
                    <p className="text-slate-500 text-sm">AI 辅助语义分析，确保文书关键词符合目标院校偏好。</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-4 font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/20">
                  解锁完整评估报告
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">候选人报告快照 #4920</span>
                  <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">Top 2% 卓越候选人</span>
                </div>
                <div className="space-y-10">
                  {[
                    { label: '学术严谨度', val: 94 },
                    { label: '领导力指数', val: 88 },
                    { label: '科研潜能', val: 72 },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-2.5">
                      <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        <span>{stat.label}</span>
                        <span className="text-white">{stat.val}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 w-full rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.val}%` }}
                          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="flex gap-3">
                    <div className="w-1 h-auto bg-indigo-500/50 rounded-full" />
                    <p className="text-sm font-medium text-slate-300 leading-relaxed">
                      "该候选人与 NUS 计算机硕士项目高度契合。建议在个人陈述中重点突出专门的 AI 研究伦理相关背景。"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Success */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl text-brand-primary-container font-medium">全球校友成就</h2>
                <p className="text-slate-500 text-lg max-w-xl">
                  加入寰宇学术是开启国际顶尖职业生涯的第一步。我们的校友目前就职于麦肯锡、谷歌和世界银行等领先机构。
                </p>
              </div>
              <a href="#" className="text-brand-primary font-bold border-b-2 border-brand-primary pb-1 group flex items-center gap-2">
                查阅所有案例
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Alumni Case 1 */}
              <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpizgicLBFMLj_rA7CJh625WjP27JTFIHrAP-bdq-6MY0IQ_5qltoYra4jZur1kVYO62C7FDf3mesA9m5rfRwTf-RmE659hTwkOyA0ixILpyO2I47EJaOoo6YszVpLnQyem0fXU5eEYmcD9aUtV4zvb5k963Hd3BeItCkkgkURWoKau54kyPt21oHY-h1lMHyOFGBEGKFHWFoJ10vkVioX2efJQZC3L2idx1JM01y2h74RSKLhhluEVZbgDz3iAX9zbHGUxMKm951p" 
                    alt="Li Wei"
                  />
                </div>
                <div className="p-8 md:w-3/5 space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-widest">
                    <GraduationCap className="w-4 h-4" /> 新加坡国立大学 (NUS)
                  </div>
                  <h4 className="text-xl text-slate-800 font-bold leading-tight">
                    "在 6 个月内从普通地区本科跨越至亚洲第一学府。"
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Li Wei 通过我们严苛的背景审计，成功获得了金融工程硕士项目的全额奖学金。
                  </p>
                  <p className="pt-2 font-bold text-xs text-slate-400">— 2023 届校友</p>
                </div>
              </div>

              {/* Alumni Case 2 */}
              <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjMF0VUF_18J-1j6QTRYAACTGWk91Ow66LI6jQSsdlDtZiq7hHouZzVTntz7cEAJTRVnlMlD1-l_ksDXOaZtcqLZ6ys_ER8cpVBqTYvjeVhkxbDjLknfAHjJQEUpkr7xa5Vpcmogd1Fg8MM8ehkKM7cvy9-q10-fN9apgKCcj_6hqpJ2eJWYJjzxIPJaAYoyX6CAU40DCGNNBUH1_HhpEE1rdEClwNchnQ1k-y78AchKGgtUUk2asWOyrwwbHOn1qmjChVsSzclb6u" 
                    alt="Arjun"
                  />
                </div>
                <div className="p-8 md:w-3/5 space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-widest">
                    <GraduationCap className="w-4 h-4" /> 香港大学 (HKU)
                  </div>
                  <h4 className="text-xl text-slate-800 font-bold leading-tight">
                    "战略性的申请路线图消除了过程中的所有不确定性。"
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Arjun 利用其工程背景，成功转专业进入港大数据科学硕士项目。
                  </p>
                  <p className="pt-2 font-bold text-xs text-slate-400">— 2022 届校友</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 border-t border-slate-100 bg-white text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-5xl md:text-6xl text-slate-900 font-bold tracking-tight">名校之旅，由此开启</h2>
            <p className="text-slate-500 text-xl font-normal max-w-2xl mx-auto">
              已有 2,400+ 名申请者通过我们成功踏入新加坡与香港顶尖学府。
            </p>
            <div className="pt-4">
              <button className="bg-indigo-600 hover:bg-white border-2 border-indigo-600 hover:text-indigo-600 text-white px-12 py-5 font-bold rounded-2xl shadow-xl shadow-indigo-600/20 transition-all">
                立即开启评估
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Landmark className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight uppercase">寰宇学术</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              为下一代全球学者提供机构级的录取保障与专业指导。
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-slate-900 font-bold text-lg">资源</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors">评估工具</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors">院校名录</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors">申请指南</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-slate-900 font-bold text-lg">机构</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors">成功案例</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors">隐私政策</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors">服务条款</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-slate-900 font-bold text-lg">联系我们</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>contact@academiaglobal.edu</li>
              <li>International Plaza, Singapore</li>
              <li>Two IFC, Hong Kong</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 border-t border-slate-100 pt-8">
          <p className="text-xs font-medium text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} 寰宇学术 (AcademiaGlobal). 保留所有权利。专业学术指导。
          </p>
        </div>
      </footer>
    </div>
  );
}
