import React from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import '../styles/CraneDetails.css'; // นำเข้าไฟล์ CSS

const CraneDetails = () => {
  const navigate = useNavigate(); // สร้างตัวแปรสำหรับการนำทาง

  const handleBackToHome = () => {
    navigate('/'); // นำทางกลับไปยังหน้าหลัก
  };

  return (
    <div className="crane-details-container">
      <h1>Crane Details</h1>
      <p>This is the details page for Crane (CR.3).</p>
      {/* ปุ่มกลับหน้าหลัก */}
      <button className="back-to-home-button" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default CraneDetails;
