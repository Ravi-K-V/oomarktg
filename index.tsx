import React, { useState, useEffect } from 'react';
import { Eye, TrendingUp, Users, Brain, Sparkles, Calendar, DollarSign, Target, Award, Building, School, Heart, ChevronRight, Plus, Check, AlertCircle, Search, Filter, BarChart3, PieChart, Activity, Zap, MessageSquare, Share2, Star, ArrowRight, Lightbulb, Rocket, Map, UserPlus, RefreshCw, Shield, Clock, Phone, Mail, MapPin, ChevronDown, Menu, X, Bot, Megaphone, FileText, Gift, UserCheck, Briefcase, Baby, User, Users2, Home, Settings, LogOut } from 'lucide-react';

// Main App Component
export default function LocalEyes() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showAICampaign, setShowAICampaign] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceData, setPracticeData] = useState({
    name: "Clear Vision Optometry",
    location: "42 Maple Street",
    patients: 1847,
    monthlyRevenue: 47250,
    newPatientsThisMonth: 23,
    communityScore: 72
  });

  // Simulated real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPracticeData(prev => ({
        ...prev,
        newPatientsThisMonth: prev.newPatientsThisMonth + Math.floor(Math.random() * 2),
        monthlyRevenue: prev.monthlyRevenue + Math.floor(Math.random() * 500)
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const navigationItems = [
    { id: 'dashboard', label: 'Command Center', icon: BarChart3 },
    { id: 'acquisition', label: 'Patient Acquisition', icon: UserPlus },
    { id: 'community', label: 'Community Hero', icon: Building },
    { id: 'campaigns', label: 'AI Campaigns', icon: Brain },
    { id: 'offers', label: 'Chain Killers', icon: Target },
    { id: 'journey', label: 'Patient Journey', icon: Route },
    { id: 'analytics', label: 'Intelligence', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">LocalEyes</h1>
                <p className="text-xs text-gray-500">Be the only optometrist they think of</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigationItems.slice(0, 5).map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-4 w-4 inline mr-1" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5 inline mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'dashboard' && <DashboardSection practiceData={practiceData} />}
        {activeSection === 'acquisition' && <AcquisitionSection />}
        {activeSection === 'community' && <CommunitySection />}
        {activeSection === 'campaigns' && <AICampaignsSection />}
        {activeSection === 'offers' && <ChainKillerOffers />}
        {activeSection === 'journey' && <PatientJourneySection />}
        {activeSection === 'analytics' && <IntelligenceSection />}
      </main>
    </div>
  );
}

// Dashboard Section
function DashboardSection({ practiceData }) {
  const metrics = [
    { 
      label: 'New Patients This Month', 
      value: practiceData.newPatientsThisMonth, 
      change: '+47%', 
      icon: UserPlus,
      color: 'green' 
    },
    { 
      label: 'Monthly Revenue', 
      value: `$${practiceData.monthlyRevenue.toLocaleString()}`, 
      change: '+22%', 
      icon: DollarSign,
      color: 'blue' 
    },
    { 
      label: 'Community Score', 
      value: `${practiceData.communityScore}/100`, 
      change: '+5', 
      icon: Award,
      color: 'purple' 
    },
    { 
      label: 'Chain Patients Won', 
      value: '17', 
      change: '+13', 
      icon: Trophy,
      color: 'yellow' 
    }
  ];

  const recentWins = [
    { type: 'New Family', description: 'Johnson family (5 members) switched from LensCrafters', time: '2 hours ago' },
    { type: 'School Partnership', description: 'Maple Elementary chose us as vision partner', time: '1 day ago' },
    { type: 'Corporate Account', description: 'Tech Solutions Inc. signed up 45 employees', time: '3 days ago' },
    { type: 'Community Event', description: 'Youth soccer screening brought 23 new patients', time: '1 week ago' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, Dr. Smith</h2>
        <p className="text-gray-600 mt-1">Your practice is outperforming 84% of chains in your area</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <metric.icon className={`h-8 w-8 text-${metric.color}-500`} />
              <span className={`text-sm font-medium text-${metric.color}-600`}>{metric.change}</span>
            </div>
            <p className="mt-4 text-2xl font-bold text-gray-900">{metric.value}</p>
            <p className="text-sm text-gray-500">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* AI Insight Alert */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex items-start">
          <Brain className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">AI Insight: Opportunity Detected!</h3>
            <p className="mt-1 text-purple-100">
              3 local businesses with 200+ employees have no vision benefits program. 
              One-click campaigns ready to launch. Potential: 150 new patients.
            </p>
            <button className="mt-3 bg-white text-purple-600 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
              View Opportunities
            </button>
          </div>
        </div>
      </div>

      {/* Recent Wins */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Wins 🎉</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentWins.map((win, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">{win.type}</p>
                  <p className="text-sm text-gray-600 mt-1">{win.description}</p>
                </div>
                <span className="text-xs text-gray-500">{win.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// AI Campaigns Section
function AICampaignsSection() {
  const [generatingCampaign, setGeneratingCampaign] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showIntelligence, setShowIntelligence] = useState(false);
  
  const campaignCategories = [
    { id: 'all', label: 'All Campaigns', count: 20 },
    { id: 'seasonal', label: 'Seasonal', count: 4 },
    { id: 'condition', label: 'Condition-Based', count: 6 },
    { id: 'demographic', label: 'Demographic', count: 9 },
    { id: 'competitive', label: 'Chain Beaters', count: 1 }
  ];

  const aiGeneratedCampaigns = [
    {
      id: 1,
      title: "Back-to-School Vision Heroes",
      category: 'seasonal',
      description: "Target parents 2 weeks before school starts. Emphasize learning impact.",
      potentialPatients: 45,
      roi: "8.2x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Works in any country with school systems",
      tactics: [
        'School supply store partnerships',
        'Teacher referral program',
        'Free vision screening events',
        'Parent Facebook groups'
      ]
    },
    {
      id: 2,
      title: "Screen Time SOS",
      category: 'condition',
      description: "Reach remote workers suffering from digital eye strain",
      potentialPatients: 120,
      roi: "12.4x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Universal problem - adapts to local work culture",
      tactics: [
        'LinkedIn targeting tech companies',
        'Ergonomic workspace assessments',
        'Blue light solution packages',
        'Corporate wellness webinars'
      ]
    },
    {
      id: 3,
      title: "Grandparents' Clear Moments",
      category: 'demographic',
      description: "Help grandparents see grandchildren clearly. High emotional impact.",
      potentialPatients: 35,
      roi: "6.7x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Culturally sensitive messaging for different regions",
      tactics: [
        'Senior center partnerships',
        'Grandchild photo contests',
        'Multi-generational discounts',
        'Transportation partnerships'
      ]
    },
    {
      id: 4,
      title: "Chain Escape Route",
      category: 'competitive',
      description: "Win dissatisfied chain customers with personal service stories",
      potentialPatients: 80,
      roi: "15.3x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Identifies local chains automatically",
      tactics: [
        'Review monitoring for complaints',
        'Comparison landing pages',
        'Switch incentives',
        'Personal doctor videos'
      ]
    },
    {
      id: 5,
      title: "New Parent Vision Alert",
      category: 'demographic',
      description: "Target new parents about infant eye development milestones",
      potentialPatients: 65,
      roi: "22.1x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Partners with local pediatricians/birthing centers",
      tactics: [
        'Pediatrician referral network',
        'Baby milestone tracker app',
        'New parent welcome packages',
        'Infant vision education series'
      ]
    },
    {
      id: 6,
      title: "Driving After Dark",
      category: 'condition',
      description: "Target 45+ adults struggling with night driving",
      potentialPatients: 95,
      roi: "9.8x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Adapts to local driving conditions/regulations",
      tactics: [
        'DMV partnership opportunities',
        'Auto insurance discount programs',
        'Night vision assessment events',
        'Uber/taxi driver programs'
      ]
    },
    {
      id: 7,
      title: "Athletes' Edge Vision",
      category: 'demographic',
      description: "Sports vision training for competitive advantage",
      potentialPatients: 75,
      roi: "11.3x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Customizes for popular local sports",
      tactics: [
        'Sports club partnerships',
        'Performance tracking metrics',
        'Athlete testimonials',
        'Tournament presence'
      ]
    },
    {
      id: 8,
      title: "Diabetes Vision Protection",
      category: 'condition',
      description: "Partner with endocrinologists for diabetic eye care",
      potentialPatients: 110,
      roi: "18.7x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Integrates with local healthcare systems",
      tactics: [
        'Medical referral network',
        'Diabetes support groups',
        'Insurance maximization',
        'Retinal imaging campaigns'
      ]
    },
    {
      id: 9,
      title: "Wedding Season Clarity",
      category: 'seasonal',
      description: "Perfect vision for your perfect day",
      potentialPatients: 40,
      roi: "7.4x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Adjusts to local wedding seasons/customs",
      tactics: [
        'Bridal expo booths',
        'Wedding photographer partnerships',
        'Bridal party packages',
        'Contact lens trials'
      ]
    },
    {
      id: 10,
      title: "Post-Surgery Success",
      category: 'condition',
      description: "Capture cataract/LASIK follow-up care",
      potentialPatients: 55,
      roi: "14.2x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Partners with surgical centers",
      tactics: [
        'Surgeon co-management',
        'Post-op care packages',
        'Recovery timeline content',
        'Insurance coordination'
      ]
    },
    {
      id: 11,
      title: "Workplace Wellness Initiative",
      category: 'demographic',
      description: "On-site corporate vision benefits",
      potentialPatients: 200,
      roi: "24.6x",
      effort: "high",
      status: 'ready',
      globalAdaptation: "Adapts to local business culture",
      tactics: [
        'HR department pitches',
        'Productivity metrics',
        'Mobile clinic options',
        'Executive eye care VIP'
      ]
    },
    {
      id: 12,
      title: "Festival & Fair Presence",
      category: 'seasonal',
      description: "Community event vision screenings",
      potentialPatients: 150,
      roi: "19.3x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Identifies local events automatically",
      tactics: [
        'Mobile screening unit',
        'Fun vision tests/games',
        'Instant booking rewards',
        'Family photo ops'
      ]
    },
    {
      id: 13,
      title: "Migraine & Vision Connection",
      category: 'condition',
      description: "Target chronic headache sufferers",
      potentialPatients: 85,
      roi: "13.1x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Medical terminology localization",
      tactics: [
        'Neurologist partnerships',
        'Headache diary app',
        'Specialized lens solutions',
        'Success story campaigns'
      ]
    },
    {
      id: 14,
      title: "Empty Nesters' New View",
      category: 'demographic',
      description: "Parents whose kids left for college",
      potentialPatients: 45,
      roi: "8.9x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Adapts to education systems globally",
      tactics: [
        'College parent groups',
        'Hobby-focused messaging',
        'Progressive lens education',
        'Couple packages'
      ]
    },
    {
      id: 15,
      title: "Beauty & Eyes Campaign",
      category: 'demographic',
      description: "Partner with makeup artists & beauty salons",
      potentialPatients: 70,
      roi: "10.2x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Culturally sensitive beauty standards",
      tactics: [
        'Salon referral program',
        'Makeup-friendly eyewear',
        'Beauty blogger partnerships',
        'Aesthetic frame collections'
      ]
    },
    {
      id: 16,
      title: "Gamer Vision Boost",
      category: 'demographic',
      description: "Target esports and serious gamers",
      potentialPatients: 90,
      roi: "15.8x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Targets local gaming communities",
      tactics: [
        'Gaming cafe partnerships',
        'Twitch streamer sponsors',
        'Blue light gaming glasses',
        'Tournament sponsorships'
      ]
    },
    {
      id: 17,
      title: "Real Estate Agent Network",
      category: 'demographic',
      description: "New homeowner vision care packages",
      potentialPatients: 60,
      roi: "11.7x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Works with local property markets",
      tactics: [
        'Realtor referral rewards',
        'New neighbor welcome kits',
        'Home office assessments',
        'Family move-in specials'
      ]
    },
    {
      id: 18,
      title: "Pregnancy Vision Changes",
      category: 'condition',
      description: "Educate expecting mothers on vision changes",
      potentialPatients: 50,
      roi: "16.4x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Partners with prenatal care providers",
      tactics: [
        'OB/GYN partnerships',
        'Pregnancy app integration',
        'Trimester-specific content',
        'Postpartum follow-ups'
      ]
    },
    {
      id: 19,
      title: "Construction Site Safety",
      category: 'demographic',
      description: "Safety eyewear for construction workers",
      potentialPatients: 130,
      roi: "20.1x",
      effort: "medium",
      status: 'ready',
      globalAdaptation: "Meets local safety regulations",
      tactics: [
        'Construction company contracts',
        'OSHA compliance packages',
        'On-site vision testing',
        'Prescription safety glasses'
      ]
    },
    {
      id: 20,
      title: "Holiday Gift of Sight",
      category: 'seasonal',
      description: "Vision care gift certificates for holidays",
      potentialPatients: 85,
      roi: "9.6x",
      effort: "low",
      status: 'ready',
      globalAdaptation: "Adapts to local holiday calendars",
      tactics: [
        'Gift card promotions',
        'Corporate gift programs',
        'Charity donation matching',
        'Family gift packages'
      ]
    }
  ];

  const handleGenerateCampaign = () => {
    setGeneratingCampaign(true);
    setTimeout(() => {
      setGeneratingCampaign(false);
      // In real app, this would call AI API
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Campaign Generator</h2>
          <p className="text-gray-600 mt-1">Campaigns that write themselves and bring patients through your door</p>
        </div>
        <button
          onClick={handleGenerateCampaign}
          disabled={generatingCampaign}
          className="mt-4 sm:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center disabled:opacity-50"
        >
          {generatingCampaign ? (
            <>
              <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
              Generating Campaign...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" />
              Generate New Campaign
            </>
          )}
        </button>
      </div>

      {/* AI Assistant Card */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-start">
          <Bot className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Your AI Marketing Assistant</h3>
            <p className="text-gray-600 mt-1">
              I've analyzed your practice data and local market. You're missing out on approximately 
              <span className="font-bold text-blue-600"> 340 potential patients</span> monthly. 
              Let's fix that with campaigns that actually work.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300">
                🎯 Local SEO: 72% opportunity
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300">
                👨‍👩‍👧‍👦 Family packages underutilized
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300">
                🏫 3 schools without partners
              </span>
            </div>
            
            {/* Campaign Success Predictor */}
            <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                AI Success Predictions for Your Area
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Back-to-School Campaign</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-green-600">94%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Screen Time SOS</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-green-600">87%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Wedding Season Clarity</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '62%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-yellow-600">62%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *Based on your location, demographics, and competitor analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {campaignCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Campaign Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {aiGeneratedCampaigns
          .filter(campaign => selectedCategory === 'all' || campaign.category === selectedCategory)
          .map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
      </div>

      {/* AI Real-Time Intelligence */}
      <div className="bg-black text-white rounded-lg p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold flex items-center">
              <Zap className="h-6 w-6 text-yellow-400 mr-2" />
              AI Real-Time Campaign Intelligence
            </h3>
            <p className="text-gray-300 mt-1">Opportunities detected in your area right now</p>
          </div>
          <button 
            onClick={() => setShowIntelligence(!showIntelligence)}
            className="text-yellow-400 hover:text-yellow-300"
          >
            {showIntelligence ? 'Hide' : 'Show All'}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-yellow-400 font-medium">TRENDING NOW</span>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <h4 className="font-medium mb-1">Local School Failed Vision Screenings Up 40%</h4>
            <p className="text-sm text-gray-300 mb-3">
              Maple Elementary reported unprecedented screening failures. Parents actively seeking appointments.
            </p>
            <button className="text-sm bg-yellow-400 text-black px-3 py-1 rounded font-medium hover:bg-yellow-300">
              Launch Campaign →
            </button>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-green-400 font-medium">COMPETITOR WEAK SPOT</span>
              <span className="text-xs text-gray-400">Today</span>
            </div>
            <h4 className="font-medium mb-1">LensCrafters Has 3-Week Wait Times</h4>
            <p className="text-sm text-gray-300 mb-3">
              Their doctor is on vacation. 47 negative reviews posted. Perfect timing for "Same Day Service" campaign.
            </p>
            <button className="text-sm bg-green-400 text-black px-3 py-1 rounded font-medium hover:bg-green-300">
              Steal Patients →
            </button>
          </div>
          
          {showIntelligence && (
            <>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-400 font-medium">WEATHER OPPORTUNITY</span>
                  <span className="text-xs text-gray-400">Tomorrow</span>
                </div>
                <h4 className="font-medium mb-1">Sunny Weekend After 2 Weeks of Rain</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Perfect for outdoor vision screening event. Park permit auto-generated. Equipment checklist ready.
                </p>
                <button className="text-sm bg-blue-400 text-black px-3 py-1 rounded font-medium hover:bg-blue-300">
                  Schedule Event →
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-purple-400 font-medium">SOCIAL MEDIA SPIKE</span>
                  <span className="text-xs text-gray-400">1 hour ago</span>
                </div>
                <h4 className="font-medium mb-1">"Blue Light" Searches Up 300% Locally</h4>
                <p className="text-sm text-gray-300 mb-3">
                  News article about screen time went viral. Your blue light campaign ready to deploy instantly.
                </p>
                <button className="text-sm bg-purple-400 text-black px-3 py-1 rounded font-medium hover:bg-purple-300">
                  Capitalize Now →
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Quick Win Suggestions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <Lightbulb className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Quick Win Available!</h3>
            <p className="text-gray-700 mt-1">
              The coffee shop next door has 500+ daily customers. A simple "Tired Eyes?" 
              campaign with a coffee shop voucher for new patients could bring 20-30 new 
              patients this month. Want me to set it up?
            </p>
            <button className="mt-3 text-yellow-700 font-medium hover:text-yellow-800">
              Set up in 2 minutes →
            </button>
          </div>
        </div>
      </div>

      {/* Global Campaign Library */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              Global Campaign Library
            </h3>
            <p className="text-indigo-100 mt-1">
              Campaigns that work worldwide, adapted to your local culture
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🇬🇧</span>
              <span className="font-medium">UK Adaptation</span>
            </div>
            <p className="text-sm text-indigo-100">
              NHS referral integration, school term campaigns, high street positioning
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🇺🇸</span>
              <span className="font-medium">US Adaptation</span>
            </div>
            <p className="text-sm text-indigo-100">
              Insurance maximizer, sports vision focus, mall competition strategies
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🇦🇺</span>
              <span className="font-medium">Australia Adaptation</span>
            </div>
            <p className="text-sm text-indigo-100">
              Sun protection emphasis, outdoor lifestyle campaigns, Medicare integration
            </p>
          </div>
        </div>
        
        <p className="text-sm text-indigo-200 mt-4 text-center">
          + 47 more countries with localized campaigns, regulations, and cultural adaptations
        </p>
      </div>
    </div>
  );
}

// Campaign Card Component
function CampaignCard({ campaign }) {
  const [expanded, setExpanded] = useState(false);
  
  const effortColors = {
    low: 'green',
    medium: 'yellow',
    high: 'red'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
            <p className="text-gray-600 mt-1">{campaign.description}</p>
          </div>
          {campaign.status === 'generating' && (
            <div className="ml-4 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium animate-pulse">
              AI Generating...
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Potential Patients</p>
            <p className="text-xl font-bold text-gray-900">{campaign.potentialPatients}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Expected ROI</p>
            <p className="text-xl font-bold text-green-600">{campaign.roi}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Effort Level</p>
            <p className={`text-xl font-bold text-${effortColors[campaign.effort]}-600 capitalize`}>
              {campaign.effort}
            </p>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Campaign Tactics:</h4>
            <ul className="space-y-2">
              {campaign.tactics.map((tactic, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{tactic}</span>
                </li>
              ))}
            </ul>
            {campaign.globalAdaptation && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-700">
                  <span className="font-medium">🌍 Global Ready:</span> {campaign.globalAdaptation}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 text-sm font-medium hover:text-blue-700"
          >
            {expanded ? 'Show Less' : 'View Details'}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Launch Campaign
          </button>
        </div>
      </div>
    </div>
  );
}

// Patient Acquisition Section
function AcquisitionSection() {
  const problemPages = [
    { 
      title: 'Blurry Vision While Driving', 
      visits: 342, 
      conversions: 47,
      status: 'live' 
    },
    { 
      title: 'Child Struggling in School', 
      visits: 289, 
      conversions: 61,
      status: 'live' 
    },
    { 
      title: 'Constant Headaches', 
      visits: 198, 
      conversions: 31,
      status: 'live' 
    },
    { 
      title: 'Computer Eye Strain', 
      visits: 0, 
      conversions: 0,
      status: 'draft' 
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Patient Acquisition Engine</h2>
        <p className="text-gray-600 mt-1">Stop competing on price. Start solving problems.</p>
      </div>

      {/* Vision Quiz Results */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Vision Problem Quiz</h3>
          <button className="text-blue-600 font-medium hover:text-blue-700">
            Customize Quiz →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">1,247</p>
            <p className="text-sm text-gray-500">Quiz Completions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">34%</p>
            <p className="text-sm text-gray-500">Book Appointments</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">$127</p>
            <p className="text-sm text-gray-500">Cost per Acquisition</p>
          </div>
        </div>
      </div>

      {/* Problem-Specific Landing Pages */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Problem-Specific Landing Pages</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {problemPages.map((page, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{page.title}</h4>
                  <div className="mt-1 flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      {page.visits} visits
                    </span>
                    <span className="text-sm text-gray-500">
                      {page.conversions} bookings
                    </span>
                    {page.conversions > 0 && (
                      <span className="text-sm font-medium text-green-600">
                        {((page.conversions / page.visits) * 100).toFixed(1)}% conversion
                      </span>
                    )}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  page.status === 'live' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {page.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Vision Hotline */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Emergency Vision Hotline</h3>
            <p className="text-gray-700 mt-1">
              Be the first call for urgent eye problems. 87% of emergency callers become long-term patients.
            </p>
            <div className="mt-4 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-gray-900">42</p>
                <p className="text-sm text-gray-500">Emergency calls this month</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">37</p>
                <p className="text-sm text-gray-500">Converted to patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Community Hero Section
function CommunitySection() {
  const schoolPartners = [
    { name: 'Maple Elementary', students: 450, status: 'active', screenings: 3 },
    { name: 'Oak Ridge Middle', students: 600, status: 'pending', screenings: 0 },
    { name: 'Pine Valley High', students: 800, status: 'prospect', screenings: 0 }
  ];

  const communityPrograms = [
    {
      name: 'Youth Sports Vision',
      participants: 127,
      newPatients: 43,
      icon: '⚽'
    },
    {
      name: 'Senior Center Outreach',
      participants: 89,
      newPatients: 31,
      icon: '👴'
    },
    {
      name: 'Local Business Partnerships',
      participants: 15,
      newPatients: 178,
      icon: '🏢'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Community Vision Hero</h2>
        <p className="text-gray-600 mt-1">Be everywhere that matters in your community</p>
      </div>

      {/* Community Impact Score */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Community Impact Score: 87/100</h3>
            <p className="mt-2 text-green-100">
              You're the #1 most visible optometrist in your area. 3 competitors are trying to copy your community strategy.
            </p>
          </div>
          <Award className="h-16 w-16 text-white/20" />
        </div>
      </div>

      {/* School Partnerships */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">School Vision Partnerships</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Add School
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {schoolPartners.map((school, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <School className="h-5 w-5 text-gray-400 mr-2" />
                    {school.name}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {school.students} students • {school.screenings} screenings completed
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    school.status === 'active' 
                      ? 'bg-green-100 text-green-700'
                      : school.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {school.status}
                  </span>
                  {school.status === 'active' && (
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-700">
                      Schedule Screening
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {communityPrograms.map((program, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-4xl mb-4">{program.icon}</div>
            <h4 className="font-semibold text-gray-900">{program.name}</h4>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Participants</span>
                <span className="text-sm font-medium text-gray-900">{program.participants}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">New Patients</span>
                <span className="text-sm font-medium text-green-600">{program.newPatients}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Chain Killer Offers Section
function ChainKillerOffers() {
  const offers = [
    {
      name: 'Perfect Vision Guarantee',
      description: 'First exam free if not 100% satisfied',
      activeUsers: 234,
      conversionRate: 89,
      revenueImpact: '+$34,500'
    },
    {
      name: 'Family Vision Passport',
      description: 'One pays, whole family saves 40% for a year',
      activeUsers: 156,
      conversionRate: 76,
      revenueImpact: '+$67,200'
    },
    {
      name: 'Vision Protection Plan',
      description: '$99/year covers emergencies, repairs, updates',
      activeUsers: 412,
      conversionRate: 92,
      revenueImpact: '+$40,788'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Chain Killer Offers</h2>
        <p className="text-gray-600 mt-1">Irresistible without being cheap</p>
      </div>

      {/* Offer Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900">{offer.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Active Users</span>
                <span className="font-medium text-gray-900">{offer.activeUsers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Conversion</span>
                <span className="font-medium text-green-600">{offer.conversionRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Revenue Impact</span>
                <span className="font-medium text-blue-600">{offer.revenueImpact}</span>
              </div>
            </div>
            
            <button className="mt-4 w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
              Edit Offer
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Tool */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">You vs. The Chains</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Feature</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">You</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">LensCrafters</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Pearle Vision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 text-gray-600">Same Day Service</td>
                <td className="text-center py-3 px-4">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-600">Personal Doctor Relationship</td>
                <td className="text-center py-3 px-4">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-600">Community Programs</td>
                <td className="text-center py-3 px-4">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-600">Satisfaction Guarantee</td>
                <td className="text-center py-3 px-4">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Patient Journey Section
function PatientJourneySection() {
  const journeyStages = [
    {
      stage: 'Awareness',
      description: 'Problem recognition',
      conversion: '12%',
      tactics: ['SEO Pages', 'Social Proof', 'Community Events'],
      status: 'optimized'
    },
    {
      stage: 'Interest',
      description: 'Exploring solutions',
      conversion: '34%',
      tactics: ['Vision Quiz', 'Educational Content', 'Reviews'],
      status: 'optimized'
    },
    {
      stage: 'Trust',
      description: 'Choosing provider',
      conversion: '67%',
      tactics: ['Doctor Videos', 'Guarantees', 'Testimonials'],
      status: 'needs-work'
    },
    {
      stage: 'First Visit',
      description: 'Initial experience',
      conversion: '89%',
      tactics: ['Pre-visit Prep', 'Welcome Package', 'Clear Pricing'],
      status: 'optimized'
    },
    {
      stage: 'Amazement',
      description: 'Exceeding expectations',
      conversion: '45%',
      tactics: ['Photoshoot', 'Thank You', 'Surprise Perks'],
      status: 'needs-work'
    },
    {
      stage: 'Loyalty',
      description: 'Lifetime patient',
      conversion: '91%',
      tactics: ['VIP Program', 'Birthday Gifts', 'Family Benefits'],
      status: 'optimized'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Patient Journey Optimizer</h2>
        <p className="text-gray-600 mt-1">From first click to customer for life</p>
      </div>

      {/* Journey Visualization */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          {journeyStages.map((stage, index) => (
            <div key={index} className="relative">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  stage.status === 'optimized' ? 'bg-green-500' : 'bg-yellow-500'
                }`}>
                  {index + 1}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                      <p className="text-sm text-gray-500">{stage.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{stage.conversion}</p>
                      <p className="text-sm text-gray-500">conversion</p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {stage.tactics.map((tactic, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tactic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {index < journeyStages.length - 1 && (
                <div className="ml-5 h-8 w-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Automation Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Automated Touchpoints</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Pre-appointment reminders</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Post-visit thank you</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Birthday greetings</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Insurance reminders</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Opportunities</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-700">45% drop-off at trust stage</span>
            </li>
            <li className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-700">Low referral activation</span>
            </li>
            <li className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-700">Missing win-back campaign</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Intelligence Section
function IntelligenceSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Intelligence Command Center</h2>
        <p className="text-gray-600 mt-1">Know everything, win everything</p>
      </div>

      {/* Market Position Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Map className="h-8 w-8 text-blue-500" />
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">73%</p>
          <p className="text-sm text-gray-500">Market Penetration</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-green-500" />
            <span className="text-sm font-medium text-green-600">+23</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">142</p>
          <p className="text-sm text-gray-500">Patients Won from Chains</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-purple-500" />
            <span className="text-sm font-medium text-green-600">+$127</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">$847</p>
          <p className="text-sm text-gray-500">Avg Patient Value</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-600">$42</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">$156</p>
          <p className="text-sm text-gray-500">Acquisition Cost</p>
        </div>
      </div>

      {/* Competitive Intelligence */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Competitive Intelligence</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">LensCrafters (2.3 miles away)</h4>
                <p className="text-sm text-gray-500 mt-1">Lost 23 patients to you this quarter</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">Winning</p>
                <p className="text-sm text-gray-500">73% choose you</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Pearle Vision (3.1 miles away)</h4>
                <p className="text-sm text-gray-500 mt-1">Running heavy discounts this month</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-yellow-600">Alert</p>
                <p className="text-sm text-gray-500">Monitor closely</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Predictions */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">AI Predictions for Next Quarter</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-bold">+87</p>
            <p className="text-purple-100">New patients expected</p>
          </div>
          <div>
            <p className="text-3xl font-bold">$72,400</p>
            <p className="text-purple-100">Revenue opportunity</p>
          </div>
          <div>
            <p className="text-3xl font-bold">3</p>
            <p className="text-purple-100">New school partnerships</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function Route({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
    </svg>
  );
}

function Trophy({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 0h1.5a2.5 2.5 0 1 1 0 5H18m-12 0v6m12-6v6m-6-10v10m0 0a5 5 0 0 0 5-5v-2a5 5 0 0 0-10 0v2a5 5 0 0 0 5 5z" />
    </svg>
  );
}

function X({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
