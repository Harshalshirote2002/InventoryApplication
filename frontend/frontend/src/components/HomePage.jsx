import "./styles/home.css";
import image from "../assets/landingPageCategories.png";
import diagnosticEquipmentImage from "../assets/diagnosticEquipments.jpg";
import monitoringEquipmentImage from "../assets/monitoringEquipments.png";
import surgicalEquipmentImage from "../assets/surgicalEquipments.png";
import dentalEquipmentImage from "../assets/dentalEquipments.png";
import sthethoscope from "../assets/sthethoscope.png";
import thermometer from "../assets/thermometer.png";
import glucometer from "../assets/glucometer.png"
import ultrasound from "../assets/ultrasound.webp"
import counterImage from "../assets/counter.png"

export default function Homepage() {
  return (
    <div className="home">
      <div className="container">
        <div className="sub-container1">
          <div className="title">Medical Supplies Inventory</div>
          <div className="sub-title">
            Reliable Medical Supplies for Every Need, Your Health, Our Priority!
          </div>
        </div>
      </div>
      <div className="container2">
        <img className="home-categories-image" src={image} />
        <div className="sub-container2">
          <div className="home-categories-title">Popular Categories</div>
          <div className="home-categories-container">
            <div className="home-category-card">
              <img src={diagnosticEquipmentImage}></img>
              <p>Diagnostic Equipments</p>
            </div>
            <div className="home-category-card">
              <img src={surgicalEquipmentImage}></img>
              <p>Surgical Instruments</p>
            </div>
            <div className="home-category-card">
              <img src={monitoringEquipmentImage}></img>
              <p>Monitoring Equipments</p>
            </div>
            <div className="home-category-card">
              <img src={dentalEquipmentImage}></img>
              <p>Dental Equipments</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="sub-container2">
          <div className="home-categories-title">Popular Items</div>
          <div className="home-categories-container">
            <div className="home-category-card">
              <img src={sthethoscope}></img>
              <p>Stethoscope</p>
            </div>
            <div className="home-category-card">
              <img src={thermometer}></img>
              <p>Thermometer</p>
            </div>
            <div className="home-category-card">
              <img src={glucometer}></img>
              <p>Glucometer</p>
            </div>
            <div className="home-category-card">
              <img src={ultrasound}></img>
              <p>Ultrasound machine</p>
            </div>
          </div>
        </div>
        <img className="home-categories-image" src={counterImage} />
      </div>
    </div>
  );
}
