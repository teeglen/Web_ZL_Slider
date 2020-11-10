# Web_ZL_Slider
赫綵。JavaScript輪播圖練習

# 範例
https://teeglen.github.io/Web_ZL_Slider/

# 使用說明

## CDN

## 架構

```
<!-- data-slider-duration 自動播放速度 -->
    <div id="jerry-silder" jerry-slider-auto="4000">
        
        <!-- 輪播圖項目：根據需求複製貼上 jerry-active 只有一組  -->
        <div class="jerry-item jerry-active">
            <img src="..." alt="">
            <h1>...</h1>
            <p>...</p>
        </div>
        <div class="jerry-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>
        <div class="jerry-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <!-- 大顆按鈕區塊 -->
        <div id="jerry-up"></div>
        <div id="jerry-next"></div>

        <!-- 小顆按鈕區塊：根據需求複製貼上 jerry-button-active 只有一組 -->
        <div id="jerry-buttons">
            <div class="jerry-button jerry-button-active" data-slider-item="1"></div>
            <div class="jerry-button" data-slider-item="2"></div>
            <div class="jerry-button" data-slider-item="3"></div>
        </div>
    </div>
```