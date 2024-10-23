import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AITPage from './AITPage';
import CSAPage from './CSAPage';
import CalculusPage from './CalculusPage';
import APCSPPage from './APCSPPage';
import APMacroeconomics from './APMacroeconomics';
import APMicroeconomics from './APMicroeconomics';
import APBiologyPage from './APBiologyPage';
import APChemistryPage from './APChemistryPage';
import APPsychologyPage from './APPsychologyPage'; 
import APEnvironmentalSciencePage from './APEnvironmentalSciencePage';
import APEnglishLiteraturePage from './APEnglishLiteraturePage';
import APEnglishLanguagePage from './APEnglishLanguagePage'; 
import APStatisticsPage from './APStatisticsPage'; 
import APUSHPage from './APUSHPage'; 
import APPhysicsCMechanicsPage from './APPhysicsCMechanicsPage'; 
import ACTPage from './ACTPage';  // Import the ACT Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ait" element={<AITPage />} />
        <Route path="/csa" element={<CSAPage />} />
        <Route path="/csp" element={<APCSPPage />} />
        <Route path="/calculus" element={<CalculusPage />} />
        <Route path="/macroeconomics" element={<APMacroeconomics />} />
        <Route path="/microeconomics" element={<APMicroeconomics />} />
        <Route path="/biology" element={<APBiologyPage />} />
        <Route path="/chemistry" element={<APChemistryPage />} />
        <Route path="/psychology" element={<APPsychologyPage />} /> 
        <Route path="/environmental-science" element={<APEnvironmentalSciencePage />} /> 
        <Route path="/english-literature" element={<APEnglishLiteraturePage />} />
        <Route path="/english-language" element={<APEnglishLanguagePage />} /> 
        <Route path="/statistics" element={<APStatisticsPage />} /> 
        <Route path="/us-history" element={<APUSHPage />} /> 
        <Route path="/physics-mechanics" element={<APPhysicsCMechanicsPage />} /> 
        <Route path="/act" element={<ACTPage />} />  {/* Add the route for ACT Page */}
      </Routes>
    </Router>
  );
}

export default App;
