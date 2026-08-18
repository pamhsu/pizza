<template>
    <main class="page">
        <section class="about-layout">
            <div class="about-content">
                <h1 class="about-title">關於我們</h1>
                <div class="about-text">
                    <p>
                        我們的披薩成立於2013年，現今於台中市東區復興路遠雄百貨商場駐店。掌廚的美國籍老闆Mamania，具有義式餐廳內場工作背景，也是個正港台灣女婿，用他的熱情將熟悉的家鄉味，分享給他深深愛上的這片土地。
                    </p>
                    <p>
                        我們的披薩秉持道地的紐約風格，20吋超大披薩絕對飽足！嚴選高品質麵粉並親自製成麵糰、過夜發酵。披薩的靈魂--「披薩醬」，洛基披薩堅持用最新鮮的香料，以獨家配方調製而成。我們的招牌肉類--「BBQ燒肉」、「迷迭香雞」、「義式臘腸丁」與「墨西哥辣腸丁」都是以獨家秘方手工自製，過程雖辛苦，卻值得。店面現場另有販售NT$50單片、義大利麵與飲品，帶給客人多樣的選擇。
                    </p>
                    <p class="about-en">
                        We're FATTA A MANO Pizza, established in 2013 and mainly run by pizza delivery in the early days. Right now we are finally settled in IFG. All our pizzas are hand-tossed to order. Our sauce is handmade, and contains the highest quality spices. We're extremely grateful for the patronage that our loyal customer base has extended us. Thank you all, and welcome to the FATTA A MANO Pizza revolution!
                    </p>
                </div>
            </div>
            <div class="about-image">
                <img src="/images/pizzalogo.png" alt="FATTA A MANO" />
            </div>
        </section>
    </main>
</template>

<style scoped>
.about-layout {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    min-height: 520px;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
}

.about-content {
    padding: 56px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.about-title {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 52px;
    font-weight: 700;
    color: #4A4435;
    margin: 0 0 28px;
    line-height: 1.2;
    letter-spacing: 2px;
}

.about-text {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.about-text p {
    margin: 0;
    color: #5a5347;
    font-size: 16px;
    line-height: 1.9;
}

.about-en {
    margin-top: 8px;
    padding-top: 18px;
    border-top: 1px solid #e8e3d9;
    font-style: italic;
    color: #73612C !important;
    font-size: 15px !important;
}

.about-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f5f0e6, #ede8d8);
    overflow: hidden;
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 24px;
}

@media (max-width: 768px) {
    .about-layout {
        grid-template-columns: 1fr;
    }

    .about-content {
        padding: 36px 28px;
    }

    .about-title {
        font-size: 38px;
    }

    .about-image {
        min-height: 300px;
    }
}

@media (max-width: 576px) {
    .about-content {
        padding: 28px 20px;
    }

    .about-title {
        font-size: 32px;
    }

    .about-text p {
        font-size: 15px;
    }
}
</style>
