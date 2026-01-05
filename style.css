* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    background: url("background.jpg") center/cover no-repeat;
    background-attachment: fixed;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    color: #ffffff;
    overflow-x: hidden;
    animation: backgroundZoom 20s ease-in-out infinite alternate;
  }

  @keyframes backgroundZoom {
    0% {
      background-size: 100% 100%;
    }
    100% {
      background-size: 110% 110%;
    }
  }
  
  .overlay {
    position: fixed;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0,0,0,0.88) 0%,
      rgba(0,0,0,0.7) 35%,
      rgba(0,0,0,0.35) 70%,
      rgba(0,0,0,0.15) 100%
    );
    z-index: 1;
    animation: overlayPulse 8s ease-in-out infinite;
  }

  @keyframes overlayPulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.95;
    }
  }

  .particles {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background-image: 
      radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.3), transparent),
      radial-gradient(2px 2px at 60% 70%, rgba(255,255,255,0.2), transparent),
      radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.4), transparent),
      radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.3), transparent),
      radial-gradient(2px 2px at 90% 80%, rgba(255,255,255,0.2), transparent);
    background-size: 200% 200%;
    animation: particlesMove 20s linear infinite;
  }

  @keyframes particlesMove {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  
  .container {
    position: relative;
    z-index: 2;
    max-width: 880px;
    height: 100%;
    padding: 90px 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .logo {
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 4px;
    margin-bottom: 25px;
    background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: logoGlow 3s ease-in-out infinite;
    position: relative;
    cursor: pointer;
    display: inline-block;
    transition: transform 0.3s ease;
    line-height: 1.2;
    padding: 0;
    width: fit-content;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  @keyframes logoGlow {
    0%, 100% {
      filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
    }
    50% {
      filter: drop-shadow(0 0 25px rgba(255,255,255,0.6));
    }
  }

  @keyframes logoFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  /* Logo Tooltip */
  .logo-tooltip {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-5px) scale(0.95);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;
    z-index: 1000;
    pointer-events: none;
    max-width: 400px;
  }

  .logo-tooltip.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
    pointer-events: auto;
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0s;
  }

  .tooltip-content {
    background: rgba(15, 15, 20, 0.98);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 25px;
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(255, 255, 255, 0.1) inset;
    position: relative;
    overflow: hidden;
  }

  .tooltip-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: tooltipShine 3s infinite;
  }

  @keyframes tooltipShine {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  .tooltip-content h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    background: linear-gradient(135deg, #ff6b6b, #4d9de0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
  }

  .tooltip-content p {
    font-size: 15px;
    line-height: 1.7;
    color: #e0e0e0;
    margin-bottom: 12px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .tooltip-content p:last-child {
    margin-bottom: 0;
  }

  .tooltip-date {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffd700 !important;
    font-weight: 500;
  }

  .tooltip-date strong {
    color: #ffd700;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }

  .tooltip-credit {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-style: italic;
    color: #b8b8b8 !important;
    font-size: 14px !important;
  }
  
  .headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 35px;
    color: #f5f5f5;
    text-shadow: 
      0 0 10px rgba(255,255,255,0.5),
      0 0 20px rgba(255,255,255,0.3),
      0 4px 15px rgba(0,0,0,0.5);
    animation: headlineSlide 1.5s ease-out, headlinePulse 4s ease-in-out infinite 1.5s;
  }

  @keyframes headlineSlide {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes headlinePulse {
    0%, 100% {
      text-shadow: 
        0 0 10px rgba(255,255,255,0.5),
        0 0 20px rgba(255,255,255,0.3),
        0 4px 15px rgba(0,0,0,0.5);
    }
    50% {
      text-shadow: 
        0 0 15px rgba(255,255,255,0.7),
        0 0 30px rgba(255,255,255,0.4),
        0 4px 20px rgba(0,0,0,0.6);
    }
  }
  
  .description {
    font-size: 18px;
    line-height: 1.75;
    color: #f5f5f5;
    max-width: 720px;
    text-shadow: 
      0 2px 8px rgba(0,0,0,0.7),
      0 0 5px rgba(255,255,255,0.2);
    animation: descriptionFade 2s ease-out;
    transform-style: preserve-3d;
    transition: transform 0.15s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    perspective: 1000px;
  }

  .description.tilt-3d {
    transition: transform 0.15s cubic-bezier(0.23, 1, 0.32, 1);
  }

  @keyframes descriptionFade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .countdown-wrapper {
    margin-top: 55px;
    animation: countdownAppear 2.5s ease-out;
  }

  @keyframes countdownAppear {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .countdown-title {
    font-size: 15px;
    color: #e0e0e0;
    margin-bottom: 15px;
    text-shadow: 0 2px 5px rgba(0,0,0,0.5);
    letter-spacing: 1px;
    font-weight: 500;
    animation: titleFlicker 3s ease-in-out infinite;
  }

  @keyframes titleFlicker {
    0%, 100% {
      opacity: 0.9;
    }
    50% {
      opacity: 1;
    }
  }
  
  .countdown {
    display: flex;
    gap: 22px;
  }
  
  .countdown div {
    min-width: 90px;
    padding: 18px 14px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(14px);
    border-radius: 14px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 
      0 8px 32px rgba(0,0,0,0.3),
      0 0 20px rgba(255,255,255,0.1) inset;
    transition: all 0.3s ease;
    animation: countdownFloat 4s ease-in-out infinite;
    position: relative;
    overflow: hidden;
  }

  .countdown div::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    animation: countdownShine 3s linear infinite;
  }

  @keyframes countdownFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes countdownShine {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .countdown div:nth-child(1) {
    animation-delay: 0s;
  }

  .countdown div:nth-child(2) {
    animation-delay: 0.5s;
  }

  .countdown div:nth-child(3) {
    animation-delay: 1s;
  }

  .countdown div:nth-child(4) {
    animation-delay: 1.5s;
  }

  .countdown div:hover {
    transform: translateY(-15px) scale(1.08);
    box-shadow: 
      0 20px 50px rgba(0,0,0,0.5),
      0 0 40px rgba(255,255,255,0.25) inset,
      0 0 60px rgba(255,255,255,0.2),
      0 0 80px rgba(107, 207, 127, 0.3);
    border-color: rgba(107, 207, 127, 0.5);
    background: rgba(255,255,255,0.15);
  }

  .countdown div:hover::before {
    background: linear-gradient(45deg, transparent, rgba(107, 207, 127, 0.3), transparent);
    animation: countdownShine 1.5s linear infinite;
  }
  
  .countdown span {
    font-size: 34px;
    font-weight: 700;
    display: block;
    color: #ffffff;
    text-shadow: 
      0 0 10px rgba(255,255,255,0.5),
      0 2px 8px rgba(0,0,0,0.5);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .countdown div:hover span {
    transform: scale(1.15);
    text-shadow: 
      0 0 20px rgba(255,255,255,0.8),
      0 0 30px rgba(107, 207, 127, 0.6),
      0 2px 10px rgba(0,0,0,0.6);
    color: #6bcf7f;
  }

  .countdown div:hover small {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(255,255,255,0.5);
  }
  
  .countdown small {
    font-size: 12px;
    color: #e8e8e8;
    margin-top: 6px;
    display: block;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  
  .launch-date {
    margin-top: 40px;
    font-size: 18px;
    color: #ffffff;
    text-shadow: 
      0 2px 10px rgba(0,0,0,0.6),
      0 0 8px rgba(255,255,255,0.2);
    animation: dateGlow 3s ease-in-out infinite;
    font-weight: 500;
  }

  .launch-date strong {
    color: #ffd700;
    font-weight: 700;
    text-shadow: 
      0 0 15px rgba(255,215,0,0.6),
      0 2px 8px rgba(0,0,0,0.5);
    animation: datePulse 2s ease-in-out infinite;
  }

  @keyframes dateGlow {
    0%, 100% {
      text-shadow: 
        0 2px 10px rgba(0,0,0,0.6),
        0 0 8px rgba(255,255,255,0.2);
    }
    50% {
      text-shadow: 
        0 2px 15px rgba(0,0,0,0.7),
        0 0 12px rgba(255,255,255,0.3);
    }
  }

  @keyframes datePulse {
    0%, 100% {
      text-shadow: 
        0 0 15px rgba(255,215,0,0.6),
        0 2px 8px rgba(0,0,0,0.5);
    }
    50% {
      text-shadow: 
        0 0 25px rgba(255,215,0,0.8),
        0 2px 12px rgba(0,0,0,0.6);
    }
  }
  
  /* Fade-in animasyon */
  .fade-in {
    animation: fadeIn 1.2s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Sayı değişim animasyonu için */
  .countdown span.flash {
    animation: numberFlash 0.5s ease;
  }

  @keyframes numberFlash {
    0% {
      transform: scale(1);
      color: #ffffff;
    }
    50% {
      transform: scale(1.2);
      color: #ffd700;
    }
    100% {
      transform: scale(1);
      color: #ffffff;
    }
  }
  
  /* Mobil */
  @media (max-width: 768px) {
    body {
      animation: backgroundZoom 15s ease-in-out infinite alternate;
    }

    .container {
      padding: 50px 28px;
    }
  
    .logo {
      font-size: 42px;
      letter-spacing: 3px;
    }

    .logo-tooltip {
      max-width: 90%;
      left: 5% !important;
      right: 5% !important;
    }

    .tooltip-content {
      padding: 20px;
    }

    .tooltip-content h3 {
      font-size: 20px;
    }

    .tooltip-content p {
      font-size: 14px;
    }
  
    .headline {
      font-size: 28px;
    }
  
    .description {
      font-size: 16px;
    }
  
    .countdown {
      flex-wrap: wrap;
      gap: 15px;
    }

    .countdown div {
      min-width: 75px;
      padding: 15px 12px;
    }

    .countdown span {
      font-size: 28px;
    }

    .countdown small {
      font-size: 11px;
    }

    .launch-date {
      font-size: 16px;
    }
  }
  
