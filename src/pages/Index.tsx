
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Introduction from "@/components/Introduction";
import WorkbookModal from "@/components/WorkbookModal";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal every time the page loads
    setShowModal(true);
  }, []);

  return (
    <Layout>
      <WorkbookModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Introduction />
    </Layout>
  );
};

export default Index;
