'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [copyText, setCopyText] = useState('Copy')

  useEffect(() => {
    const interval = setInterval(() => {
      if(copyText === "Copied"){
        setCopyText('Copy')
      }

      else {
        setCopyText('Copy')
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [copyText])
  return (
    <main className={styles.main}>

      <div className={styles.greetingContainer}>
        <Image 
          width={448 * 1.1}
          height={443 * 1.1}
          src="/6-cut.jpg"
          alt="main picture"
          className={styles.mainImg}
        />

        <div className={styles.typography}>
          <h1 className={styles.typoTitle}>Dad's Cat Club</h1>

          <h4 className={styles.typoDesc}>A father's love is unconditional, <br />and that includes his love for his furry feline friend.</h4>

          <button className={styles.buyBtn}>Buy $Dadscat</button>

          <div className={styles.actionBtn}>
            <Image
              src="/pump.png"
              width={55}
              height={55}
              alt="pump logo"
              className={styles.actionBtns}
            />

            <a href="https://x.com/DadsCatClub" target="blank_">
              <Image
                src="/twitter.png"
                width={55}
                height={55}
                alt="twitter logo"
                className={styles.actionBtns}
              />
            </a>

            <a href="https://t.me/+EzV9ySqWGnA1YWU8" target="blank_">
              <Image
                src="/telegram.png"
                width={55}
                height={55}
                alt="telegram logo"
                className={styles.actionBtns}
              />
            </a>

            <a href="https://www.tiktok.com/@dadscatclub" target="blank_">
              <Image
                src="/tiktok.png"
                width={55}
                height={55}
                alt="tiktok logo"
                className={styles.actionBtns}
              />
            </a>

            
          </div>
        </div>
        
      </div>
      <div className={styles.container}>
          <div className={styles.column}>
            <Image 
              src="/1.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="1"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/2.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="2"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/3.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="3"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />
          </div>

          <div className={styles.column}>
            <Image 
              src="/14.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="4"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/5.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="5"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/16.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="6"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />
          </div>

          <div className={styles.column}>
            <Image 
              src="/7.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="7"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/8.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="8"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/9.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="9"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />
          </div>

          <div className={styles.column}>
            <Image 
              src="/10.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="10"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/11.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="11"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />

            <Image 
              src="/15.jpg"
              width={466 / 2}
              height={750 / 2}
              alt="12"
              style={
                {
                  width: "100%",
                  marginTop: "8px",
                  verticalAlign: "middle"
                }
              }
            />
          </div>
      </div>

      <div className={styles.tokenomicsSection}>
            <h1>Tokenomics</h1>

            <div className={styles.box} style={{padding: "24px 54px"}}>
              <h1>Total Supply</h1>
              <h4>1,000,000,000 $DADSCAT</h4>
            </div>

            <div className={styles.box} style={{marginTop: "2rem"}}>
              <h1>Token Address</h1>
              <h4 className={styles.tokAdd}>
                EZUFNJMZTBpungQX2czEb<br />9ZyCMjtdzsDGMK4UywDUa1F
              </h4>
              <button className={styles.copyBtn} onClick={() => {
                navigator.clipboard.writeText('EZUFNJMZTBpungQX2czEb9ZyCMjtdzsDGMK4UywDUa1F')
                setCopyText('Copied')
              }}>{copyText}</button>
            </div>
      </div>
    </main>
  );
}
