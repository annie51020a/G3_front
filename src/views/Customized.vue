<template >
    <section class="section-customized">
        <div class="customized-bgc-l">
                    <img src="/src/assets/pic/customized/customized-bgc-l.png" alt="">
                </div>
        <div class="customized-bgc-r">
            <img src="/src/assets/pic/customized/customized-bgc-r.png" alt="">
        </div>
        
        <!-- 客製化開始 -->
        <div class="container-customized-start" v-show="currentStep === 1">
                <h1 @click="currentStep++">打造專屬自我風格</h1>
        </div>
        
        <!-- 客製化 step 1 -->
        <div class="container-customized-step1" v-show="currentStep === 2">
            <div class="container-box">
                <div class="title">
                    <div class="circle">
                        <span class="num1">1</span>
                        <span class="num2">3</span>
                    </div>
                    <h3>選擇喜歡的傘面材質</h3>
                </div>
                <div class="pics">
                    <div
                    v-for="(pic, index) in pics"
                    :key="index"
                    :class="{'dark': selectedIndex !== null && selectedIndex !== index}"
                    class="pic"
                    @click="selectPic(index)"
                    >
                    <img :src="parseIcon(pic.img)" />
                    <h4>{{ pic.title }}</h4>
                    </div>
                </div>
                <div class="next-arrow" @click="currentStep++">
                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.897949 0.816406L10.0816 10.0001L1.91836 18.1633" stroke="#B1241A" stroke-linecap="round"/>
                    </svg>
                </div>
                
            </div>
        </div>

        <!-- 客製化 step 2 -->
        <div class="container-customized-step2" v-show="currentStep === 3">
            <div class="container-box">
                <div class="title">
                    <div class="circle">
                        <span class="num1">2</span>
                        <span class="num2">3</span>
                    </div>
                    <h3>設計出你的獨特傘面</h3>
                </div>
                <div class="design-group">
                    <div class="customized-list">
                        <div class="item-list">
                            <div class="item"  @click="showGroup('upload')">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-img.png" alt="">
                                </div>
                                <span>上傳圖片</span>
                            </div>
                            <div class="item"  @click="showGroup('template')">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-template.png" alt="">
                                </div>
                                <span>範本</span>
                            </div>
                            <div class="item"  @click="showGroup('icon')">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-i-con.png" alt="">
                                </div>
                                <span>I-Con</span>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-back.png" alt="">
                                </div>
                                <span>上一步</span>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-reset.png" alt="">
                                </div>
                                <span>重置</span>
                            </div>
                        </div>
                        <div class="img-group" v-if="currentGroup === 'upload' || currentGroup === 'template' || currentGroup === 'icon'">
                            <div class="pics">
                                <div class="pic" v-for="(pic, index) in getImageList(currentGroup)" :key="index" @click="selectImage(pic)">
                                    <img :src="pic" :alt="'pic' + index">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="design-back">
                        <div class="design">
                            <div class="design-canvas" ref="designCanvas" @click="deselectAll">
                                <div class="design-item"
                                v-for="(item, index) in designItems"
                                :key="index"
                                :style="{ 
                                    top: item.top + 'px', 
                                    left: item.left + 'px', 
                                    transform: `scale(${item.scale})`,
                                    transformOrigin: 'top left',
                                    zIndex: item.zIndex 
                                }"
                                @mousedown="selectItem(index, $event)"
                                @dblclick="removeItem(index)"
                                >
                                <img :src="item.src" alt="" :style="{ width: item.width + 'px', height: item.height + 'px' }">
                                <div class="resize-handle"
                                    @mousedown.stop="startResize(index, $event)"
                                    v-if="selectedItemIndex === index"
                                ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 隱藏畫布區域 -->
                    <canvas ref="hiddenCanvas" style="display: none;"></canvas>
                    <div class="preview-item">
                        <div class="preview">
                            <h5>效果預覽</h5>
                            <div class="pic-back">
                                <div class="pic">
                                    <img :src="selectedImage" v-if="selectedImage">
                                    <img src="/src/assets/pic/customized/Preview.png" alt="" v-if="!selectedImage">
                                </div>
                            </div>
                        </div>
                        <div class="arrow">
                            <div class="next-arrow back" @click="currentStep--">
                                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.897949 0.816406L10.0816 10.0001L1.91836 18.1633" stroke="#B1241A" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="next-arrow" @click="currentStep++">
                                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.897949 0.816406L10.0816 10.0001L1.91836 18.1633" stroke="#B1241A" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- 客製化 step 3 -->
        <div class="container-customized-step3"  v-show="currentStep === 4">
            <div class="container-box">
                <div class="title">
                    <div class="circle">
                        <span class="num1">3</span>
                        <span class="num2">3</span>
                    </div>
                    <h3>成功打造專屬於你的油紙傘</h3>
                </div>
                <div class="info">
                    <div class="pics">
                        <div class="smallpics">
                            <div class="pic" v-for="(pic, index) in smallPics" 
                                :key="index" 
                                @click="showBigPic(pic.img)">
                                <img :src="parseIcon(pic.img)" alt="">
                            </div>
                        </div>
                        <div class="bigpic">
                            <img :src="parseIcon(bigPic.img)" alt="">
                        </div>
                    </div>    
                    <div class="txt">
                        <h3>特製手工油紙傘</h3>
                        <span class="tag">獨一無二</span>
                            <span>NT$ {{price}}</span>
                            <span>合計$ {{total}}</span>
                        <div class="amount">
                            <span>數量：</span>
                            <button @click="decrement()"><i class="fa-solid fa-minus"></i></button>
                            <span>{{amount}}</span>
                            <button @click="increment()"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div class="button">
                            <router-link to="/checkout_self-prod">
                                <button class="btn">
                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 2.6061V18.2427C25 18.9594 24.7552 19.5729 24.2656 20.0833C23.776 20.5937 23.1875 20.8488 22.5 20.8488H2.5C1.8125 20.8488 1.22396 20.5937 0.734375 20.0833C0.244792 19.5729 0 18.9594 0 18.2427V2.6061C0 1.88943 0.244792 1.27591 0.734375 0.765543C1.22396 0.255181 1.8125 0 2.5 0H22.5C23.1875 0 23.776 0.255181 24.2656 0.765543C24.7552 1.27591 25 1.88943 25 2.6061ZM2.5 5.21221H22.5V2.6061H2.5V5.21221ZM2.5 10.4244V18.2427H22.5V10.4244H2.5Z" fill="white"/>
                                        </svg>
                                    直接購買
                                </button>
                            </router-link>
                            <router-link to="/product">
                                <button class="btn">取消</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </section>
</template>

<script>
    export default{
        data() {
            return {
                currentStep : 1,
                // step 1
                pics: [
                    {   
                        img: 'material_pic1.jpg',  
                        title: '棉布' 
                    },
                    { 
                        img: 'material_pic2.jpg', 
                        title: '綢布' 
                    },
                    { 
                        img: 'material_pic3.jpg', 
                        title: '宣紙' }
                    ],
                selectedIndex : null,

                // step 2
                designItems: [], // 存放圖案位置 { src, top, left, scale, zIndex }
                selectedImage: null,
                currentGroup: null,
                showImg: false,
                isResizing: false,
                isMoving: false,
                selectedItemIndex: null,
                initialMouseX: 0,
                initialMouseY: 0,
                initialItemLeft: 0,
                initialItemTop: 0,
                initialScale: 1,
                picArrays: {
                    upload: [
                        '/src/assets/pic/customized/Icon-1.png',
                        '/src/assets/pic/customized/Icon-1.png'
                    ],
                    template: [
                        '/src/assets/pic/customized/icon-2.png',
                        '/src/assets/pic/customized/icon-3.png',
                    ],
                    icon: [
                        '/src/assets/pic/customized/icon-1.png',
                        '/src/assets/pic/customized/icon-2.png',
                        '/src/assets/pic/customized/icon-3.png',
                    ],
                },

                // step 3
                smallPics: [
                    { 
                        img: 'finish.jpg'
                    },
                    { 
                        img: 'finish2.jpg'
                    }
                ],
                bigPic: { 
                    img: 'finish.jpg'
                },
                price: 999,
                amount:1
                }
        },
        computed: {
            total() {
            return this.price * this.amount;
            }
        },
        methods: {
            parseIcon(file) {
            // 指到src || ..的意思是“回到上一層”
            return new URL(`../assets/pic/customized/${file}`, import.meta.url).href
            },

            // step1 沒被選擇的變暗
            selectPic(index) {
                this.selectedIndex = index;
            },

            // step 2
            showGroup(group) {
                this.currentGroup = group;
            },
            getImageList(group) {
                return this.picArrays[group] || [];
            },

            selectImage(image) {
                const img = new Image();
                img.onload = () => {
                    const newItem = {
                    src: image,
                    top: 100,
                    left: 100,
                    width: img.width,
                    height: img.height,
                    scale: 1,
                    zIndex: this.designItems.length + 1
                    };
                    this.designItems.push(newItem);
                    this.updatePreview();
                };
                img.src = image;
            },

            updatePreview() {
                const canvas = this.$refs.hiddenCanvas;
                const ctx = canvas.getContext('2d');
                const designCanvas = this.$refs.designCanvas;

                // 設置canvas大小與設計區域相同
                canvas.width = designCanvas.offsetWidth;
                canvas.height = designCanvas.offsetHeight;

                // 創建兩個額外的canvas：一個用於繪製設計，一個用於最終的混合效果
                const designLayer = document.createElement('canvas');
                const finalCanvas = document.createElement('canvas');
                designLayer.width = finalCanvas.width = canvas.width;
                designLayer.height = finalCanvas.height = canvas.height;
                const designCtx = designLayer.getContext('2d');
                const finalCtx = finalCanvas.getContext('2d');

                // 在 designLayer 上繪製所有設計元素
                const drawPromises = this.designItems
                    .sort((a, b) => a.zIndex - b.zIndex)
                    .map(item => new Promise(resolve => {
                        const img = new Image();
                        img.onload = () => {
                            designCtx.save();
                            designCtx.translate(item.left, item.top);
                            designCtx.scale(item.scale, item.scale);
                            designCtx.drawImage(img, 0, 0, item.width, item.height);
                            designCtx.restore();
                            resolve();          
                        };
                        img.src = item.src;
                    }));

                // 當所有設計元素都繪製完成後，進行最終的混合
                Promise.all(drawPromises).then(() => {
                    // 加載背景圖
                    const backgroundImage = new Image();
                    backgroundImage.onload = () => {
                        // 在 finalCanvas 上繪製背景
                        finalCtx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

                        // 設置混合模式為 multiply 並繪製設計層
                        finalCtx.globalCompositeOperation = 'normal';
                        finalCtx.drawImage(designLayer, 0, 0);

                        // 重置混合模式
                        finalCtx.globalCompositeOperation = 'source-over';

                        // 更新預覽圖
                        this.selectedImage = finalCanvas.toDataURL();

                        // 將 finalCanvas 轉換為圖片 URL
                        const imageURL = finalCanvas.toDataURL("image/png");
                        console.log(imageURL);

                        // 需處理 formData的問題，imageURL BASE字元太多

                    };
                    backgroundImage.src = '/src/assets/pic/customized/Preview.png'; // 請替換為實際的背景圖路徑
                });
            },

            selectItem(index, e) {
                e.preventDefault(); // 阻止默認行為
                if (this.isResizing) return;
                this.isMoving = true;
                this.selectedItemIndex = index;
                const item = this.designItems[index];
                this.initialMouseX = e.clientX;
                this.initialMouseY = e.clientY;
                this.initialItemLeft = item.left;
                this.initialItemTop = item.top;
                item.zIndex = Math.max(...this.designItems.map(i => i.zIndex)) + 1;
                document.addEventListener('mousemove', this.moveItem);
                document.addEventListener('mouseup', this.stopMoving);
            },
            moveItem(e) {
                e.preventDefault(); // 阻止默認行為
                if (!this.isMoving) return;
                const item = this.designItems[this.selectedItemIndex];
                const deltaX = e.clientX - this.initialMouseX;
                const deltaY = e.clientY - this.initialMouseY;
                item.left = this.initialItemLeft + deltaX;
                item.top = this.initialItemTop + deltaY;
            },
            stopMoving() {
                this.isMoving = false;
                document.removeEventListener('mousemove', this.moveItem);
                document.removeEventListener('mouseup', this.stopMoving);
                this.updatePreview();
            },
            startResize(index, e) {
                e.stopPropagation();
                this.isResizing = true;
                this.selectedItemIndex = index;
                const item = this.designItems[index];
                this.initialScale = item.scale;
                this.initialMouseX = e.clientX;
                this.initialMouseY = e.clientY;
                document.addEventListener('mousemove', this.resize);
                document.addEventListener('mouseup', this.stopResize);
            },
            resize(e) {
                if (!this.isResizing) return;
                const item = this.designItems[this.selectedItemIndex];
                const deltaX = e.clientX - this.initialMouseX;
                const scaleFactor = 1 + deltaX / 200; // 調整縮放靈敏度
                item.scale = Math.max(0.1, Math.min(3, this.initialScale * scaleFactor));
            },
            stopResize() {
                this.isResizing = false;
                document.removeEventListener('mousemove', this.resize);
                document.removeEventListener('mouseup', this.stopResize);
                this.updatePreview();
            },
            removeItem(index) {
                this.designItems.splice(index, 1);
                this.updatePreview();
            },

            deselectAll(e) {
            // 確保點擊的是畫布而不是項目
                if (e.target === this.$refs.designCanvas) {
                    this.selectedItemIndex = null;
                }
            },

            removeItem(index) {
                // 雙擊移除圖案
                this.designItems.splice(index, 1);
                // 移除預覽圖案
                this.selectedImage = null; 
            },


            showGroup(group) {
                if (this.currentGroup === group) {
                this.currentGroup = null;
                } else {
                this.currentGroup = group;
                }
            },
            handleOutsideClick(e) {
                // 判斷點擊事件是否發生在 .customized-list 
                if (!this.$el.contains(e.target)) {
                    this.currentGroup = null;
                }
            },
            getImageList(group) {
                return this.picArrays[group] || [];
            },

            // step3 ----
            // 小圖變大圖
            showBigPic(src) {
                this.bigPic.img = src;
            },
            // 數量++
            increment() {
                this.amount++;
            },
            // 數量--
            decrement() {
                if (this.amount > 1) {
                    this.amount--;
                }
            }

        },
        mounted() {
            
            document.addEventListener('click', this.handleClickOutside);
            document.addEventListener('mousemove', this.resize);
            document.addEventListener('mouseup', this.stopResize);
        },
        beforeUnmount() {
            document.removeEventListener('mousemove', this.resize);
            document.removeEventListener('mouseup', this.stopResize);
        }
    }
</script>