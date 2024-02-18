import Cake from "../components/cake";
import bunny from "../assets/images/bunny.png";
import tonton1 from "../assets/images/ton-ton-celebrate.gif";
import tonton2  from "../assets/images/ton-ton-happy-birthday.gif";

function BirthdayPage() {
    return (
      <section id="birthday-card">
        <div className="card">
          <div className="outside">
            <div className="front">
              <p>Happy Birthday</p>
              <Cake />
            </div>
          <div className="back"></div>
        </div>
        <div className="inside">
          <p>Happy Birthday Evelien!&#127881;<br/><br/>
          生日快乐, 생일 축하해요&#127880;<br/>
          Ik wens je een hele fijne verjaardag!&#10084;&#65039;&#127873;</p>
          <img src={bunny} id="bunny" alt="bunny with balloon"/>
          <img src={tonton1} id="tonton1" alt="tonton1 gif"/>
          <img src={tonton2} id="tonton2" alt="tonton2 gif"/>
        </div>
      </div>
    </section>
  );
}

export default BirthdayPage;
