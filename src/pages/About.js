import React from 'react';
import "../styles/About.css";
import farm from "../assets/farm.jpg";

const About = () => {
  return (
    <>
      <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${farm})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        当社は新鮮で栄養価の高い野菜を提供する企業です。私たちは農家と緊密に協力し、農薬や化学肥料を使用せずに育てられた健康的な野菜を栽培しています。地域の気候や土壌に適した品種を選び、持続可能な農業プラクティスに取り組んでいます。お客様には安心して食べられる野菜を提供するため、厳しい品質管理を行っています。また、旬の野菜を重視し、美味しさと栄養を最大限に引き出す調理法やレシピも提案しています。私たちの野菜は健康と環境に配慮した選択です。
        </p>
      </div>
      </div>
    </>
  )
}

export default About