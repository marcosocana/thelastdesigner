
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Introduction from "@/components/Introduction";
import WorkbookModal from "@/components/WorkbookModal";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisitedBefore) {
      // Show modal on first visit
      setShowModal(true);
      // Mark as visited
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return (
    <Layout>
      <WorkbookModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Introduction />
    </Layout>
  );
};

export default Index;
