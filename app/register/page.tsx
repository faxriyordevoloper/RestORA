
"use client";

import Link from "next/link";
import type { CSSProperties, FormEvent } from "react";

export default function Register() {
  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const currentForm = e.currentTarget;
    const form = new FormData(currentForm);

    const data = {
      restaurant: form.get("restaurant"),
      type: form.get("type"),
      owner: form.get("owner"),
      phone: form.get("phone"),
      email: form.get("email"),
      address: form.get("address"),
      password: form.get("password"),
    };

    try {
      const response = await fetch("/api/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Xatolik yuz berdi");
        return;
      }

      alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      currentForm.reset();
    } catch {
      alert("Server bilan bog'lanib bo'lmadi");
    }
  }

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    marginTop: "8px",
    marginBottom: "17px",
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: "13px",
    background: "rgba(255,255,255,.09)",
    color: "white",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle: CSSProperties = {
    color: "#f3e8d7",
    fontSize: "13px",
    fontWeight: 600,
  };

  return (
    <main className="register-page">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        .register-page {
          min-height: 100vh;
          padding: 30px 18px 55px;
          background:
            linear-gradient(110deg,rgba(8,19,14,.93),rgba(8,19,14,.65)),
            url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000")
            center/cover fixed;
          font-family: Arial,sans-serif;
          color: white;
        }

        .top {
          max-width: 1050px;
          margin: 0 auto 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 27px;
          font-weight: 900;
          color: white;
          text-decoration: none;
        }

        .logo span { color: #f4a34d; }

        .back {
          color: white;
          text-decoration: none;
          padding: 12px 18px;
          border: 1px solid #ffffff35;
          border-radius: 30px;
          background: #ffffff15;
          backdrop-filter: blur(15px);
        }

        .card {
          max-width: 650px;
          margin: auto;
          padding: 38px;
          border-radius: 28px;
          background: rgba(20,36,27,.72);
          border: 1px solid rgba(255,255,255,.22);
          box-shadow: 0 30px 100px #0009;
          backdrop-filter: blur(25px);
        }

        .ornament {
          width: 55px;
          height: 4px;
          border-radius: 10px;
          background: linear-gradient(90deg,#e99542,#ffd092);
          margin: 0 auto 20px;
        }

        .heading {
          text-align: center;
          font-size: 31px;
          margin: 0 0 10px;
        }

        .subtitle {
          text-align: center;
          color: #c1cfc4;
          font-size: 14px;
          line-height: 1.7;
          margin: 0 auto 30px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 17px;
        }

        .field { min-width: 0; }

        .register-input::placeholder { color: #b5c1b8; }

        .register-input:focus {
          border-color: #f4a34d !important;
          box-shadow: 0 0 0 3px #f4a34d25;
        }

        .register-select option {
          background: #18271e;
          color: white;
        }

        .submit {
          width: 100%;
          padding: 17px;
          margin-top: 10px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(110deg,#e99542,#ffd092,#e99542);
          color: #19251c;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s;
        }

        .submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px #e9954250;
        }

        .note {
          text-align: center;
          color: #b5c1b8;
          font-size: 12px;
          margin-top: 20px;
        }

        @media(max-width:600px) {
          .card { padding: 25px 19px; }
          .form-grid { grid-template-columns: 1fr; }
          .heading { font-size: 25px; }
        }
      `}</style>

      <header className="top">
        <Link href="/" className="logo">
          Mazali<span>.</span>
        </Link>
        <Link href="/" className="back">
          ← Bosh sahifa
        </Link>
      </header>

      <section className="card">
        <div className="ornament" />

        <h1 className="heading">Biznesingizga xush kelibsiz</h1>

        <p className="subtitle">
          Maskaningizni platformamizga ulang va biznesingizni
          yagona zamonaviy tizim orqali boshqaring.
        </p>

        <form onSubmit={handleRegister}>
          <div className="form-grid">
            <div className="field">
              <label style={labelStyle}>Maskan nomi</label>
              <input className="register-input" style={inputStyle}
                name="restaurant" placeholder="Samarqand Osh" required />
            </div>

            <div className="field">
              <label style={labelStyle}>Maskan turi</label>
              <select className="register-input register-select"
                style={inputStyle} name="type" defaultValue="" required>
                <option value="" disabled>Turini tanlang</option>
                <option>Restoran</option>
                <option>Kafe</option>
                <option>Fast-food</option>
                <option>Oshxona</option>
                <option>Choyxona</option>
                <option>Qandolatxona</option>
                <option>Boshqa</option>
              </select>
            </div>

            <div className="field">
              <label style={labelStyle}>Egasi ism-familiyasi</label>
              <input className="register-input" style={inputStyle}
                name="owner" placeholder="Ism va familiya" required />
            </div>

            <div className="field">
              <label style={labelStyle}>Telefon raqami</label>
              <input className="register-input" style={inputStyle}
                name="phone" type="tel" placeholder="+998 90 123 45 67" required />
            </div>

            <div className="field">
              <label style={labelStyle}>Elektron pochta</label>
              <input className="register-input" style={inputStyle}
                name="email" type="email" placeholder="example@gmail.com" required />
            </div>

            <div className="field">
              <label style={labelStyle}>Manzil</label>
              <input className="register-input" style={inputStyle}
                name="address" placeholder="Shahar, ko'cha" required />
            </div>

            <div className="field" style={{gridColumn:"1 / -1"}}>
              <label style={labelStyle}>Parol</label>
              <input className="register-input" style={inputStyle}
                name="password" type="password" minLength={8}
                placeholder="Kamida 8 ta belgi" required />
            </div>
          </div>

          <button className="submit" type="submit">
            Maskanimni ro'yxatdan o'tkazish →
          </button>
        </form>

        <p className="note">
          ✦ Ma'lumotlaringiz xavfsizligi biz uchun muhim
        </p>
      </section>
    </main>
  );
}
