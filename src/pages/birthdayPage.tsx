import Cake from "../components/cake";

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
          {/* <img src= /> */}
        </div>
      </div>
    </section>
  );
}

export default BirthdayPage;
