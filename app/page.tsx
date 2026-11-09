
import Link from "next/link";

const foods = [
  {
    name: "Milliy taomlar",
    desc: "An’anaviy va mazali taomlar",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    icon: "🍲",
  },
  {
    name: "Fast food",
    desc: "Tez, mazali va zamonaviy",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    icon: "🍔",
  },
  {
    name: "Shirinliklar",
    desc: "Shirin lahzalar uchun",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    icon: "🍰",
  },
];

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #101a16; color: white; font-family: Arial, sans-serif; }
        a { text-decoration: none; color: inherit; }
        .site { min-height: 100vh; overflow: hidden; background: radial-gradient(ellipse at 80% 20%, #31523c 0%, transparent 40%), #101a16; }
        .nav { max-width: 1200px; margin: auto; padding: 25px 24px; display: flex; align-items: center; justify-content: space-between; }
        .logo { font-size: 25px; font-weight: 900; letter-spacing: -1px; }
        .logo span { color: #f4a34d; }
        .navlinks { display: flex; gap: 32px; color: #d2ddd5; font-size: 14px; }
        .glass { background: rgba(255,255,255,.09); border: 1px solid rgba(255,255,255,.17); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
        .navbtn { padding: 12px 21px; border-radius: 30px; background: #f4a34d; color: #182219; font-weight: 800; }
        .hero { max-width: 1200px; margin: auto; padding: 75px 24px 90px; display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 55px; }
        .tag { display: inline-block; border-radius: 30px; padding: 10px 16px; color: #f6bd7c; font-size: 13px; }
        h1 { font-size: clamp(43px, 6vw, 76px); line-height: 1.06; letter-spacing: -3px; margin: 25px 0; }
        h1 span { color: #f4a34d; }
        .lead { color: #bac9be; font-size: 17px; line-height: 1.8; max-width: 510px; }
        .actions { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }
        .primary { background: #f4a34d; color: #182219; padding: 16px 25px; border-radius: 14px; font-weight: 800; display: inline-block; }
        .secondary { padding: 15px 24px; border-radius: 14px; color: white; }
        .heroimg { min-height: 470px; border-radius: 35px; position: relative; background: linear-gradient(0deg,rgba(10,20,14,.4),transparent 60%), url('https://images.unsplash.com/photo-1547592180-85f173990554?w=1200') center/cover; box-shadow: 0 30px 90px #0007; }
        .float { position: absolute; bottom: 25px; left: -28px; padding: 18px 22px; border-radius: 20px; }
        .float strong { display: block; font-size: 18px; margin-bottom: 5px; }
        .float small { color: #d2ddd5; }
        .section { max-width: 1200px; margin: auto; padding: 30px 24px 90px; }
        .sectionhead { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 30px; }
        .sectionhead h2 { font-size: 35px; margin: 0 0 10px; }
        .sectionhead p { color: #aebdb2; margin: 0; }
        .cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .food { overflow: hidden; border-radius: 24px; transition: transform .25s; }
        .food:hover { transform: translateY(-7px); }
        .food img { width: 100%; height: 220px; object-fit: cover; display: block; }
        .foodinfo { padding: 20px; }
        .foodinfo h3 { margin: 0 0 8px; font-size: 20px; }
        .foodinfo p { color: #b7c5ba; margin: 0; font-size: 14px; }
        .bottom { max-width: 1152px; margin: 0 auto 55px; padding: 38px; border-radius: 28px; display: flex; align-items: center; justify-content: space-between; gap: 25px; }
        .bottom h2 { margin: 0 0 10px; font-size: 28px; }
        .bottom p { color: #c0cdc3; margin: 0; }
        footer { border-top: 1px solid #ffffff18; text-align: center; padding: 25px; color: #89988d; font-size: 13px; }
        @media(max-width: 760px) {
          .navlinks { display: none; }
          .hero { grid-template-columns: 1fr; padding-top: 40px; gap: 35px; }
          .heroimg { min-height: 340px; }
          .float { left: 12px; }
          .cards { grid-template-columns: 1fr; }
          .sectionhead { align-items: start; flex-direction: column; }
          .bottom { margin: 0 18px 40px; padding: 25px; flex-direction: column; align-items: start; }
          h1 { letter-spacing: -2px; }
        }
      `}</style>

      <div className="site">
        <nav className="nav">
          <div className="logo">Mazali<span>.</span></div>
          <div className="navlinks">
            <a href="#home">Bosh sahifa</a>
            <a href="#services">Imkoniyatlar</a>
            <a href="#about">Biz haqimizda</a>
          </div>
          <Link href="/register" className="navbtn">
            Ro‘yxatdan o‘tish ↗
          </Link>
        </nav>

        <section className="hero" id="home">
          <div>
            <span className="tag glass">✦ Ovqatlanish biznesi uchun yangi avlod platformasi</span>
            <h1>
              Biznesingizni <span>mazali</span> boshqaring.
            </h1>
            <p className="lead">
              Restoran, kafe, oshxona yoki fast-food — barcha jarayonlaringizni
              bitta zamonaviy platformada boshqaring. Buyurtmalar, menyu va
              mijozlar endi bir joyda.
            </p>
            <div className="actions">
              <Link href="/register" className="primary">
                Hoziroq boshlash →
              </Link>
              <a href="#services" className="secondary glass">
                Imkoniyatlarni ko‘rish
              </a>
            </div>
          </div>

          <div className="heroimg">
            <div className="float glass">
              <strong>🍽️ Barchasi bir platformada</strong>
              <small>Biznesingizni oson boshqaring</small>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="sectionhead">
            <div>
              <h2>Har qanday ta’mga mos</h2>
              <p>Bizning platformamiz turli ovqatlanish maskanlari uchun.</p>
            </div>
          </div>

          <div className="cards">
            {foods.map((food) => (
              <article className="food glass" key={food.name}>
                <img src={food.image} alt={food.name} />
                <div className="foodinfo">
                  <h3>{food.icon} {food.name}</h3>
                  <p>{food.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bottom glass" id="about">
          <div>
            <h2>Biznesingizni yangi bosqichga olib chiqing.</h2>
            <p>Bugun ro‘yxatdan o‘ting va platformamizdan foydalanishni boshlang.</p>
          </div>
          <Link href="/register" className="primary">
            Bepul boshlash →
          </Link>
        </section>

        <footer>
          © 2026 Mazali. Barcha huquqlar himoyalangan.
        </footer>
      </div>
    </main>
  );
}
