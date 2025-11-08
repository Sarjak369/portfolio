import { useState, useEffect } from "react";
import { Mail, Github, ArrowDown, ExternalLink, TrendingUp, Database, Brain, Code2, BarChart3, Sparkles, BookOpen, Briefcase, Award, GraduationCap, Package, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Only use dark mode if user explicitly saved it
  if (savedTheme === 'dark') {
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  }
  // Default is light mode (do nothing)
}, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'other', label: 'Other' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Clickable */}
            <button
              onClick={() => scrollToSection('top')}
              className="text-xl font-serif font-semibold hover:text-primary transition-smooth"
            >
              Sarjak Maniar
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-muted transition-smooth"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-muted transition-smooth"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-smooth"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
              <img 
                src={profilePhoto} 
                alt="Profile"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-background shadow-elegant"
              />
            </div>
          </div>
          
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">AI Data Scientist</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance leading-tight">
            Data is more than numbers—
            <span className="block text-primary mt-2">it's a story waiting to be understood</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Transforming data into clear insights and building models that solve meaningful problems across business and technology.
          </p>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth group"
          >
            <span className="font-medium">Learn more</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-smooth" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">About Me</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I specialize in transforming data into clear insights and building models that solve meaningful problems across business and technology.
            </p>
            
            <p>
              While my foundation lies in data science—statistics, machine learning, and analytical storytelling, I'm equally drawn to exploring how AI can make those systems smarter, faster, and more human-centered. I enjoy bridging the gap between traditional analytics and modern AI applications, whether it's automating insights, creating intelligent tools, or experimenting with new learning frameworks.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-8 my-8 shadow-elegant">
              <p className="text-xl italic text-muted-foreground">
                "Develop a passion for learning. If you do, you will never cease to grow."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Anthony J. D'Angelo</p>
            </div>
            
            <p>
              This mindset shapes how I approach every project—with focus, humility, and a desire to keep evolving.
            </p>
            
            <p className="font-medium text-primary">
              At my core, I'm data-driven but people-focused—committed to building reliable, transparent, and impactful data solutions that help others make better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Academic foundation and teaching experience
          </p>
          
          <div className="space-y-8">
            {/* Master's Degree */}
            <Card className="p-8 border-border bg-card hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold">
                      Master of Science in Information Technology & Analytics
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      Sep 2022 - Jan 2024
                    </span>
                  </div>
                  
                  <p className="text-primary font-medium mb-2">
                    Rutgers University • GPA: 3.7/4.0
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    New Brunswick, New Jersey, USA
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-medium">Relevant Courses:</span> Algorithmic Machine Learning, Data Analysis and Visualization, Multivariate Analysis, Business Forecasting
                  </p>

                  {/* Teaching Experience */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-lg">Part-time Lecturer - CS170: Computer Applications for Business</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Sep 2023 - Dec 2023</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Conducted recitation lectures for 50+ students covering HTML, CSS, JavaScript, Algorithms, SQL, and Excel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Prepared lecture materials, calculated grades using Excel and fostered foundational skills in data-driven problem-solving</span>
                      </li>
                    </ul>
                    <a 
                      href="https://youtube.com/playlist?list=PLWqTaavG1gQTJLLc5zHVHjaLaDijoibGR&si=q80m3GB9ju2z6p8p"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-smooth mt-3 group"
                    >
                      View Lecture Playlist
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bachelor's Degree */}
            <Card className="p-8 border-border bg-card hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold">
                      Bachelor of Engineering in Information Technology
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      Jun 2018 - May 2022
                    </span>
                  </div>
                  
                  <p className="text-primary font-medium mb-2">
                    University of Mumbai • GPA: 9.3/10
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    Mumbai, Maharashtra, India
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-medium">Relevant Courses:</span> Artificial Intelligence, Database Management System, Data Mining & Business Intelligence, Cloud Computing
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Building impactful solutions across industry and research
          </p>
          
          <div className="space-y-8">
            {[
              {
                company: "XNODE Inc.",
                role: "AI Engineer",
                period: "Mar 2025 - Aug 2025",
                location: "Boston, Massachusetts, USA (Remote)",
                description: "Engineered a Workflow Builder Agent with LangChain + LangGraph that converts natural language into automated approval workflows, reducing turnaround time by 60%. Streamlined Azure DevOps backlog updates, cutting manual tracking and accelerating sprint planning by 30%. Orchestrated a RAG-based knowledge framework indexing internal docs and project data with vector embeddings, shrinking roadmap planning from 3 days to 6 hours.",
                icon: Briefcase,
                link: "https://xnode.ai/"
              },
              {
                company: "Behavioral Informatics Labs",
                role: "Research Data Scientist",
                period: "Feb 2024 - Feb 2025",
                location: "New Brunswick, New Jersey, USA",
                description: "Assessed robustness of healthcare AI models using GPT and Llama LLMs, benchmarking the BlueBERT model (92.79% on medical abstracts and 78.2% on sentiment analysis), to evaluate reliability under real-world clinical challenges. Designed data perturbations (typos, homophones, removals) on clinical data simulating real-world noise and applied statistical analysis to quantify performance degradation and guide reliability improvements.",
                icon: Brain,
                link: "https://behavioralinformatics.org/"
              },
              {
                company: "Mintex Tech",
                role: "Data Science Intern",
                period: "May 2023 - Aug 2023",
                location: "Edison, New Jersey, USA",
                description: "Developed time-series forecasting models (LSTM for daily demand, Prophet for weekly/monthly trends) on logistics data, delivering ~82% accuracy and enabling proactive inventory planning that reduced stockouts and overstocking by 17%. Analyzed delivery performance through SQL and Tableau dashboards, uncovering peak-hour bottlenecks and optimizing routes to improve delivery speed by 20%.",
                icon: Briefcase,
                link: "https://www.mintextech.com/"
              },
              {
                company: "Leo9 Studio",
                role: "Data Science Analyst",
                period: "Aug 2021 - Jul 2022",
                location: "Mumbai, Maharashtra, India",
                description: "Performed customer segmentation using Hierarchical Clustering in Python, powering personalized campaigns (discount offers, loyalty rewards) that boosted engagement and repeat usage. Led A/B testing to refine ad creatives, increasing conversions by 20% and expanding the customer base by 10%. Applied cohort analysis to uncover high-value user segments, driving a 25% uplift in retention and engagement.",
                icon: Briefcase,
                link: "https://leo9studio.com/"
              }
            ].map((exp, index) => (
              <Card 
                key={index}
                className="p-8 border-border bg-card hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-serif font-semibold">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-primary font-medium mb-1">
                      {exp.link ? (
                        <a 
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary/80 transition-smooth inline-flex items-center gap-1 group"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.location}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Transforming data challenges into intelligent solutions
          </p>

          {/* AI/ML Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
              <Brain className="w-6 h-6 text-primary" />
              AI & Machine Learning
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Client Onboarding RAG Chatbot",
                  description: "Internal onboarding assistant with secure authentication, personalized policy retrieval, and multimodal interaction using RAG and LLM integration. Real-time voice I/O via Groq Whisper.",
                  tags: ["Python", "LangChain", "Streamlit", "Groq Whisper", "PostgreSQL", "ChromaDB"],
                  icon: Brain,
                  link: "https://github.com/Sarjak369/Client-Onboarding-RAG-Chatbot"
                },
                {
                  title: "LogSenseAI: Intelligent Log Classification",
                  description: "Hybrid framework combining Regex, Transformers, Llama 3.3, and Logistic Regression for complex log classification. 40% higher accuracy than rule-based systems, reducing operational costs by 30%.",
                  tags: ["Python", "FastAPI", "DBSCAN", "Transformers", "LLMs"],
                  icon: Brain,
                  link: "https://github.com/Sarjak369/LogSenseAI"
                },
                {
                  title: "AI Shop Assistant Chatbot",
                  description: "E-commerce assistant combining GPT-4o with semantic search via Pinecone for context-aware product recommendations. Sub-second responses across 100+ catalog items with hybrid MySQL + vector search.",
                  tags: ["Python", "FastAPI", "Streamlit", "OpenAI", "Pinecone", "MySQL"],
                  icon: Brain,
                  link: "https://github.com/Sarjak369/Shop-Assistant-RAG-Chatbot"
                },
                {
                  title: "AI Role Validator",
                  description: "AI validator aligning XML-defined job roles with unstructured PDFs using RAG and LLM-based extraction. Accelerated validation workflows by 80% through optimized embedding pipelines.",
                  tags: ["Python", "LangChain", "Streamlit", "OpenAI", "ChromaDB"],
                  icon: Brain,
                  link: "https://github.com/Sarjak369/AI-XML-Role-Validator"
                },
                {
                  title: "Financial Assistant Agent",
                  description: "Full-stack financial assistant delivering real-time stock insights with Alpha Vantage API and Spark SQL for 5-minute updates. Redis caching cut API calls by 80%.",
                  tags: ["Python", "FastAPI", "React.js", "Apache Spark", "Redis"],
                  icon: TrendingUp,
                  link: "https://github.com/Sarjak369/financial-assistant-agent"
                },
                {
                  title: "LinkedIn Post Generator",
                  description: "AI tool analyzing influencers' LinkedIn posts to learn their writing style and generate new posts using Llama 3.3. Two-stage pipeline improved workflow efficiency by ~40%.",
                  tags: ["Python", "Streamlit", "Llama 3.3", "Groq Cloud"],
                  icon: Sparkles,
                  link: "https://github.com/Sarjak369/LinkedIn-Post-Generator"
                },
                {
                  title: "Dynamic SQL Assistant: Text-to-SQL",
                  description: "Text-to-SQL tool leveraging Llama model, LangChain, and Groq to convert natural language queries into SQL. Automated database creation from CSVs enabling non-technical data insights.",
                  tags: ["LangChain", "Groq", "SQLite", "Streamlit"],
                  icon: Database,
                  link: "https://github.com/Sarjak369/Text-to-SQL",
                  youtube: "https://youtu.be/p9tVqmoBhfQ?si=Xm9TCGAVs6-GWNy5"
                },
                {
                  title: "AI Doctor: Multimodal Medical Chatbot",
                  description: "Multimodal medical chatbot using LLaMA 3 Vision and OpenAI Whisper. Interprets image and voice inputs for health queries with real-time AI-driven diagnoses via Gradio UI.",
                  tags: ["LLamA 3 Vision", "Whisper", "Groq", "Gradio"],
                  icon: Brain,
                  link: "https://github.com/Sarjak369/AI-Doctor",
                  youtube: "https://youtu.be/yS9xVH0iYYQ?si=jqKHAC0y-JzgbPqc"
                },
                {
                  title: "JobReachAI: Cold Email Generator",
                  description: "Cold email generator using Llama model and ChromaDB to extract job listings and generate personalized outreach emails, automating business development with portfolio matching.",
                  tags: ["LangChain", "ChromaDB", "Streamlit"],
                  icon: Sparkles,
                  link: "https://github.com/Sarjak369/cold_email_generator_Llama3.1"
                },
                {
                  title: "ThyroPredict: Thyroid Classification",
                  description: "ML pipeline to classify thyroid disorders achieving 92% accuracy and 98% ROC AUC with KNeighborsClassifier. KMeans clustering for adaptive segmentation, deployed on AWS EC2.",
                  tags: ["Python", "Flask", "AWS", "Machine Learning"],
                  icon: TrendingUp,
                  link: "https://github.com/Sarjak369/ThyroPredict"
                },
                {
                  title: "AdClickOptimizer: Predictive System",
                  description: "Machine learning models (Random Forest, Logistic Regression) with 96% accuracy for ad CTR forecasting. 10% performance improvement via time-based feature engineering.",
                  tags: ["Python", "Flask", "Random Forest", "Statistical Analysis"],
                  icon: BarChart3,
                  link: "https://github.com/Sarjak369/AdClickOptimizer"
                },
                {
                  title: "CreditPredictor: Credit Risk Classification",
                  description: "ML pipeline forecasting credit card default risk achieving 87% accuracy and AUC 0.95 with XGBoost. KMeans clustering for adaptive segmentation, deployed on AWS EC2 with 99.9% uptime.",
                  tags: ["Python", "Flask", "AWS", "XGBoost"],
                  icon: TrendingUp,
                  link: null
                },
                {
                  title: "WaferSense: Fault Detection",
                  description: "ML pipeline detecting faulty semiconductor wafers from 590+ sensor readings. Achieved ~91% accuracy & ROC AUC 0.96 with cluster-specific RF, SVM, and XGBoost models on AWS EC2.",
                  tags: ["Python", "Flask", "AWS", "Machine Learning"],
                  icon: TrendingUp,
                  link: null
                }
              ].map((project, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-hover transition-smooth group border-border bg-card flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif font-semibold mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth inline-flex items-center gap-2 group"
                      >
                        View on GitHub
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                      </a>
                    )}
                    {project.youtube && (
                      <a 
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-red-600 hover:text-red-500 transition-smooth inline-flex items-center gap-2"
                      >
                        YouTube
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Analytics Projects */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-primary" />
              Data Analytics
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "HR Analytics Dashboard",
                  description: "Interactive Tableau dashboard analyzing 1,470 employees across key metrics like attrition rate (16.12%), job satisfaction, and department performance for data-driven HR strategies.",
                  tags: ["Tableau", "Excel", "Data Visualization"],
                  icon: BarChart3,
                  link: "https://github.com/Sarjak369/HR-Analytics-Dashboard-Tableau"
                },
                {
                  title: "Expense Tracker Web App",
                  description: "Full-featured web app with expense categorization, multi-account management, and monthly tracking. Automated CSV export and email functionality with interactive Plotly visualizations.",
                  tags: ["Python", "Streamlit", "SQLite3", "Plotly"],
                  icon: BarChart3,
                  link: "https://github.com/Sarjak369/Expense_Tracker_WebApp"
                },
                {
                  title: "CaféMetrics: Revenue Analysis",
                  description: "Interactive Excel dashboard analyzing 149,116 transactions for Maven Roasters NYC. Power Query transformation revealed consistent upward revenue trend of $698,812 and 17.5% monthly growth.",
                  tags: ["Microsoft Excel", "Power Query", "PivotTables"],
                  icon: BarChart3,
                  link: "https://github.com/Sarjak369/CafeMetrics"
                }
              ].map((project, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-hover transition-smooth group border-border bg-card flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif font-semibold mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth inline-flex items-center gap-2 group mt-auto"
                    >
                      View on GitHub
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                    </a>
                  )}
                </Card>
              ))}
            </div>

            {/* See More Projects Button */}
            <div className="text-center">
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <a 
                  href="https://github.com/Sarjak369?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View More Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Research Publications</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Contributing to academic research in AI and NLP
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "To laugh or not to laugh – LSTM based humor detection approach",
                venue: "2021 12th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
                year: "2021",
                publisher: "IEEE",
                date: "06-08 July 2021",
                description: "Developed an LSTM-based model for humor detection in text, achieving 94.62% accuracy. The model uses word embeddings and sequential processing to identify humorous patterns in sentences, addressing the challenge of automated humor understanding.",
                link: "https://ieeexplore.ieee.org/document/9580124"
              },
              {
                title: "Generation and grading of arduous MCQs using NLP and OMR detection using OpenCV",
                venue: "2021 12th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
                year: "2021",
                publisher: "IEEE",
                date: "06-08 July 2021",
                description: "Developed évaluer, an automated system that generates difficult-to-search MCQs through text paraphrasing and automates grading using OMR detection. The system addresses the challenge of creating unique assessment questions and streamlines evaluation processes.",
                link: "https://ieeexplore.ieee.org/document/9580089"
              }
            ].map((pub, index) => (
              <Card 
                key={index}
                className="p-8 border-border bg-card hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {pub.title}
                </h3>
                
                <p className="text-primary font-medium mb-1">
                  {pub.venue}
                </p>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {pub.publisher} • {pub.date}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {pub.description}
                </p>
                
                {pub.link && (
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth inline-flex items-center gap-2 group"
                  >
                    Read on IEEE Xplore
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Tools and technologies I work with
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Data Science & ML",
                icon: BarChart3,
                skills: [
                  "Statistical Analysis & Inference",
                  "Machine Learning (Scikit-learn, XGBoost)",
                  "Time Series Forecasting",
                  "A/B Testing & Experimentation",
                  "Feature Engineering",
                  "Model Evaluation & Deployment"
                ]
              },
              {
                category: "AI & Deep Learning",
                icon: Brain,
                skills: [
                  "Natural Language Processing",
                  "Transformer Models (BERT, GPT)",
                  "Computer Vision Basics",
                  "LLM Fine-tuning & Prompting",
                  "RAG Systems",
                  "AI Agent Development"
                ]
              },
              {
                category: "Engineering & Tools",
                icon: Code2,
                skills: [
                  "Python (Pandas, NumPy, SciPy)",
                  "SQL & Database Design",
                  "Data Pipeline Development",
                  "Git & Version Control",
                  "Docker & MLOps",
                  "Cloud Platforms (AWS/GCP basics)"
                ]
              },
              {
                category: "Languages",
                icon: Code2,
                skills: [
                  "Python (Expert)",
                  "SQL (Advanced)",
                  "R (Intermediate)",
                  "JavaScript/TypeScript"
                ]
              },
              {
                category: "ML/AI Frameworks",
                icon: Brain,
                skills: [
                  "TensorFlow / Keras",
                  "PyTorch",
                  "Scikit-learn",
                  "LangChain",
                  "Hugging Face Transformers"
                ]
              },
              {
                category: "Data & Analytics",
                icon: Database,
                skills: [
                  "Pandas, NumPy",
                  "PostgreSQL, MongoDB",
                  "Apache Spark",
                  "Tableau, Power BI",
                  "Git & Version Control"
                ]
              }
            ].map((category, index) => (
              <Card 
                key={index}
                className="p-8 border-border bg-card hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">
                    {category.category}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Working Principles</h2>
          <p className="text-xl text-muted-foreground mb-12">
            How I approach AI and data science
          </p>
          
          <div className="grid gap-8">
            {[
              {
                title: "Roots before rockets",
                description: "Core statistical thinking and traditional ML remain essential. I use LLMs where they add leverage, not as a default."
              },
              {
                title: "AI as an amplifier",
                description: "The win is better problem framing, faster iteration, and clearer decisions, not replacing experts."
              },
              {
                title: "Measure > magic",
                description: "Ship, measure, iterate. If it doesn't move a metric, it's a demo."
              }
            ].map((principle, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 shadow-elegant hover:shadow-hover transition-smooth"
              >
                <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">
                  {principle.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-lg font-medium mb-2">My Philosophy</p>
            <p className="text-xl italic">
              AI isn't replacing data scientists, it's redefining us.
            </p>
            <p className="text-muted-foreground mt-4">
              I treat AI as a force multiplier on top of solid DS/ML foundations—better problem framing, faster experiments, and more aligned outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Other Section (Open Source Contribution) */}
      <section id="other" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Other</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Additional contributions and activities
          </p>
          
          {/* Open Source Contribution */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" />
              Open Source Contribution
            </h3>
            
            <Card className="p-8 border-border bg-card hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-2xl font-serif font-semibold mb-3">
                    LangFlow-Viz: Workflow Graph Visualizer for LangGraph
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Developed and open-sourced a Python library to visualize and analyze LangGraph-style AI workflows, supporting Graphviz (SVG/PNG) and Mermaid.js (Markdown/HTML) exports for interactive documentation.
                  </p>
                  
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Engineered an automated GitHub Actions CI/CD pipeline for trusted PyPI publishing, improving release reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Enhanced developer usability with graph analytics, style customization, and conditional-edge rendering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Enabled faster debugging and improved interpretability of complex AI agent flows</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "GitHub Actions", "PyPI", "Graphviz", "Mermaid.js"].map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/Sarjak369/langflow-viz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth inline-flex items-center gap-2 group"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                    </a>
                    
                    <a 
                      href="https://pypi.org/project/langflow-viz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth inline-flex items-center gap-2 group"
                    >
                      <Package className="w-5 h-5" />
                      View on PyPI
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Interested in collaborating or learning more about my work?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-border bg-card hover:shadow-elegant transition-smooth">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Reach out for project collaborations or consulting opportunities
              </p>
              <a 
                href="mailto:sarjakm369@gmail.com"
                className="text-primary hover:text-primary/80 transition-smooth inline-flex items-center gap-2 group"
              >
                sarjakm369@gmail.com
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
              </a>
            </Card>
            
            <Card className="p-8 border-border bg-card hover:shadow-elegant transition-smooth">
              <Github className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Explore my open-source contributions and project repositories
              </p>
              <a 
                href="https://github.com/Sarjak369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-smooth inline-flex items-center gap-2 group"
              >
                github.com/Sarjak369
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
              </a>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-hover transition-smooth"
              >
                <a href="mailto:sarjakm369@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send me an email
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <a 
                  href="https://github.com/Sarjak369" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Sarjak Maniar • AI Data Scientist • Transforming data into insights</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
