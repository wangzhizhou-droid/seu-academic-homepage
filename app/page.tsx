const profile = {
  name: "Wangzhi Zhou",
  englishName: "Wangzhi Zhou",
  initials: "WZ",
  department: "School of Mathematics",
  university: "Southeast University",
  degree: "Undergraduate",
  email: "wangzhizhou474@gmail.com",
  github: "https://github.com/wangzhizhou-droid",
  graduation: "2027",
};

const news = [
  {
    date: "2026.07",
    content: "建立个人学术主页，用于整理课程项目、研究经历与学习笔记。",
  },
  {
    date: "2026.06",
    content: "持续寻找本科生科研、学科竞赛与技术实习机会。",
  },
  {
    date: "2026.03",
    content: "开始系统整理感兴趣的研究方向与相关课程资料。",
  },
];

const projects = [
  {
    title: "课程或科研项目题目",
    period: "2026",
    description:
      "在这里用两到三句话说明问题背景、你的具体工作与最终结果。建议尽量写清数据、方法或可验证的成果。",
    links: ["Project", "Code"],
  },
  {
    title: "数据分析或工程实践题目",
    period: "2025–2026",
    description:
      "可以放课程设计、竞赛、实验室任务或个人项目。项目规模不必很大，但需要体现你的思考和贡献。",
    links: ["Report", "Code"],
  },
  {
    title: "正在进行的研究兴趣探索",
    period: "Ongoing",
    description:
      "记录你正在阅读的问题、想验证的想法或希望加入的研究方向。内容确定后，可替换为正式项目介绍。",
    links: ["Notes"],
  },
];

const coursework = [
  "数据结构与算法",
  "计算机组成原理",
  "概率论与数理统计",
  "线性代数",
  "数据库系统",
  "机器学习（按实际课程修改）",
];

const interests = [
  {
    title: "Algorithms & Systems",
    text: "算法、系统与实际计算问题之间的联系。",
  },
  {
    title: "Data & Intelligence",
    text: "从数据中理解规律，并构建可靠、可解释的方法。",
  },
  {
    title: "Interdisciplinary Problems",
    text: "计算技术在工程、科学与社会问题中的应用。",
  },
];

export default function Home() {
  return (
    <div className="academic-shell">
      <aside className="sidebar">
        <a className="sidebar-name" href="#home">
          {profile.englishName}
        </a>
        <nav aria-label="页面导航">
          <a href="#home">Home</a>
          <a href="#biography">Biography</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#coursework">Coursework</a>
          <a href="#honors">Honors</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="sidebar-meta">
          <p>Last updated</p>
          <time dateTime="2026-07-15">July 2026</time>
        </div>
      </aside>

      <main className="academic-main" id="home">
        <header className="page-heading">
          <h1>{profile.englishName}</h1>
          <p>{profile.name}</p>
        </header>

        <section className="profile-intro" aria-labelledby="profile-title">
          <div className="portrait-placeholder" aria-label="个人照片占位区域">
            <strong>{profile.initials}</strong>
            <span>PROFILE PHOTO</span>
          </div>
          <div className="profile-facts" id="profile-title">
            <ul>
              <li>
                <strong>{profile.degree}</strong>
              </li>
              <li>
                <a href="https://www.seu.edu.cn/" target="_blank" rel="noreferrer">
                  {profile.university}
                </a>
              </li>
              <li>{profile.department}</li>
              <li>Expected graduation: {profile.graduation}</li>
              <li>
                Research interests: algorithms, data, and intelligent systems
              </li>
            </ul>
            <p className="profile-links">
              <a href={`mailto:${profile.email}`}>Email</a>
              <span>·</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>·</span>
              <a href="#projects">Projects</a>
              <span>·</span>
              <a href="#contact">CV</a>
            </p>
          </div>
        </section>

        <section className="prose-section" id="biography">
          <p>
            Welcome to my homepage! 我是东南大学的一名大三本科生。目前，我正在通过课程学习、项目实践与论文阅读探索自己的研究兴趣，并持续提升独立分析问题和完成项目的能力。
          </p>
          <p>
            我对算法、数据与智能系统相关问题感兴趣，也愿意了解计算机技术在不同学科中的应用。这个网站用于记录我的学习经历、项目工作与研究思考，并会随着新的经历持续更新。
          </p>
          <p>
            I am currently open to undergraduate research, internships, and
            collaborative projects. Please feel free to contact me if our
            interests overlap.
          </p>
        </section>

        <section className="content-section" aria-labelledby="news-title">
          <h2 id="news-title">Recent News</h2>
          <ul className="news-list">
            {news.map((item) => (
              <li key={`${item.date}-${item.content}`}>
                <time>[{item.date}]</time>
                <span>{item.content}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="research" aria-labelledby="research-title">
          <h2 id="research-title">Research Interests</h2>
          <p>
            我的研究兴趣仍在形成中。目前主要关注以下几个相互关联的方向：
          </p>
          <ul className="interest-list">
            {interests.map((interest) => (
              <li key={interest.title}>
                <strong>{interest.title}.</strong> {interest.text}
              </li>
            ))}
          </ul>
          <p className="note">
            注：这里应替换为你的真实兴趣，最好具体到 2–3 个问题，而不仅是宽泛的学科名称。
          </p>
        </section>

        <section className="content-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Selected Projects</h2>
          <ol className="project-list">
            {projects.map((project) => (
              <li key={project.title}>
                <div className="project-line">
                  <strong>{project.title}</strong>
                  <span>{project.period}</span>
                </div>
                <p>{project.description}</p>
                <div className="resource-links" aria-label={`${project.title} 相关链接`}>
                  {project.links.map((link) => (
                    <a key={link} href={profile.github} target="_blank" rel="noreferrer">
                      [{link}]
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section" id="coursework" aria-labelledby="coursework-title">
          <h2 id="coursework-title">Selected Coursework</h2>
          <div className="course-grid">
            {coursework.map((course) => (
              <span key={course}>{course}</span>
            ))}
          </div>
        </section>

        <section className="content-section" id="honors" aria-labelledby="honors-title">
          <h2 id="honors-title">Honors &amp; Activities</h2>
          <ul>
            <li>在这里填写奖学金、竞赛获奖、荣誉称号或重要的学生工作。</li>
            <li>如果暂时没有内容，可以先写正在参与的实验室、社团或开源社区。</li>
            <li>只保留能够核实、并且与你的学术或技术发展相关的经历。</li>
          </ul>
        </section>

        <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <address>
            <strong>{profile.name} / {profile.englishName}</strong>
            <br />
            {profile.department}
            <br />
            {profile.university}
            <br />
            Nanjing, Jiangsu, China
            <br />
            Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </address>
        </section>

        <footer>
          <p>
            Page maintained by {profile.englishName}. Inspired by the clarity
            and structure of classic academic homepages.
          </p>
        </footer>
      </main>
    </div>
  );
}
