<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout>
        <GridLayout
          class="carousel-layout-fix"
          height="300"
          width="100%"
          columns="*"
          rows="*"
        >
          <Carousel
            height="100%"
            width="100%"
            pageChanged="myChangeEvent"
            pageTapped="mySelectedEvent"
            indicatorColor="#fff000"
            finite="true"
            bounce="true"
            showIndicator="true"
            verticalAlignment="top"
            android:indicatorAnimation="swap"
            color="white"
          >
            <CarouselItem
              id="slide1"
              backgroundImage="~/assets/images/banner/banner-slider1.jpg"
              backgroundSize="100% 100%"
              backgroundRepeat="no-repeat"
              verticalAlignment="middle"
            >
              <Label
                text="Slide 1"
                backgroundColor="#50000000"
                horizontalAlignment="center"
              />
            </CarouselItem>
            <CarouselItem
              id="slide2"
              backgroundImage="~/assets/images/banner/banner-contact.png"
              backgroundSize="100% 100%"
              backgroundRepeat="no-repeat"
              verticalAlignment="middle"
            >
              <Label
                text="Slide 2"
                backgroundColor="#50000000"
                horizontalAlignment="center"
              />
            </CarouselItem>
            <CarouselItem
              id="slide3"
              backgroundImage="~/assets/images/banner/banner-store.jpg"
              backgroundSize="100% 100%"
              backgroundRepeat="no-repeat"
              verticalAlignment="middle"
            >
              <Label
                text="Slide 3"
                backgroundColor="#50000000"
                horizontalAlignment="center"
              />
            </CarouselItem>
            <CarouselItem
              id="slide4"
              backgroundImage="~/assets/images/banner/banner_htkd.png"
              backgroundSize="100% 100%"
              backgroundRepeat="no-repeat"
              verticalAlignment="middle"
            >
              <Label
                text="Slide 4"
                backgroundColor="#50000000"
                horizontalAlignment="center"
              />
            </CarouselItem>
          </Carousel>
        </GridLayout>
        <Label
          text="TIN TỨC"
          textWrap="true"
          padding="20 30"
          fontWeight="600"
          fontSize="18"
        />
        <ScrollView orientation="horizontal">
          <StackLayout orientation="horizontal">
            <card-view
              radius="10"
              class="card"
              margin="10"
              elevation="20"
              width="200"
              v-for="i in news"
              :key="i"
            >
              <GridLayout rows="100,70,80,*" columns="*,*,*" @tap="onTab(i)">
                <Image row="0" colSpan="3" :src="i.smallImg" stretch="fill" />
                <Label
                  :text="i.title"
                  textWrap="true"
                  row="1"
                  colSpan="3"
                  padding="10"
                  fontWeight="600"
                />
                <Label
                  :text="i.content"
                  textWrap="true"
                  row="2"
                  @loaded="labelOnLoaded"
                  colSpan="3"
                  padding="0 0 10 10"
                />
                <StackLayout row="3" colSpan="2">
                  <Button
                    class="btn_news"
                    text="chi Tiết"
                    borderRadius="20%"
                    height="25"
                    padding="0"
                    width="80%"
                    margin="0 0 10 5"
                    horizontalAlignment="left"
                  />
                </StackLayout>
              </GridLayout>
            </card-view>
          </StackLayout>
        </ScrollView>
        <Label
          text="KHUYẾN MÃI"
          textWrap="true"
          padding="20 30"
          fontWeight="600"
          fontSize="18"
        />
        <ScrollView orientation="horizontal">
          <StackLayout orientation="horizontal">
            <card-view
              radius="10"
              class="card"
              margin="10"
              elevation="20"
              width="200"
              v-for="i in offer"
              :key="i"
            >
              <GridLayout rows="100,80,60,*" columns="*,*,*" @tap="onTab(i)">
                <Image row="0" colSpan="3" :src="i.smallImg" stretch="fill" />
                <Label
                  :text="i.title"
                  textWrap="true"
                  row="1"
                  colSpan="3"
                  padding="10"
                  fontWeight="600"
                />
                <Label
                  :text="i.content"
                  textWrap="true"
                  row="2"
                  @loaded="labelOnLoaded"
                  colSpan="3"
                  padding="0 0 10 10"
                />
                <StackLayout row="3" colSpan="2">
                  <Button
                    class="btn_news"
                    text="chi Tiết"
                    @tap="onTab(i)"
                    borderRadius="20%"
                    height="25"
                    padding="0"
                    width="80%"
                    margin="0 0 10 5"
                    horizontalAlignment="left"
                  />
                </StackLayout>
              </GridLayout>
            </card-view>
          </StackLayout>
        </ScrollView>
        <Label text="" textWrap="true" marginBottom="100" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import Chitiettin from "./detailnews";
const carousel = require("nativescript-carousel");
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          smallImg: "~/assets/images/news/1.jpg",
          bigImg: "~/assets/images/news/1_1.jpg",
          title: "NẾU PHÁT HIỆN CÀ PHÊ DỎM, CỨ LÔI BẦU ĐỨC RA CHỬI!",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Ngày 1-7, tại TP HCM, chuỗi cà phê "Ông Bầu" chính thức ra mắt điểm bán thứ 100 tại Nhà Văn hóa Thanh Niên (số 4 Phạm Ngọc Thạch, quận 1, TP HCM) với sự xuất hiện lần đầu tiên của bầu Đức (ông Đoàn Nguyên Đức, Chủ tịch Tập đoàn Hoàng Anh Gia Lai) – thành viên sáng lập thương hiệu này.

            Theo bầu Đức: "Cách đây khoảng 6-8 tháng, bầu Hải (ông Trần Thanh Hải, Chủ tịch Công ty NutiFood) và bầu Thắng (ông Võ Quốc Thắng, Chủ tịch Tập đoàn Đồng Tâm) có gặp tôi để mời hợp tác cùng xây dựng thương hiệu cà phê Ông Bầu cho thị trường Việt Nam. Tôi mới trao đổi thẳng thắn là hai ông làm cà phê thật hay cà phê giả. Bởi lẽ, nếu tương lai cà phê Ông Bầu làm tào lao thì tôi là người chết trước. Sau khi anh Hải và anh Thắng khẳng định làm thật thì tôi gật đầu.

            Chúng tôi đang cố gắng làm cà phê sạch, cà phê thật như đã làm bóng đá thật, bóng đá thật nhiều năm trước vì trước giờ thị trường cà phê Việt Nam là cà phê pha trộn. Tôi đã có 20 năm bỏ tiền làm bóng đá với số tiền khổng lồ, có thể lên đến 2.000 tỉ đồng. Bây giờ muốn tiếp tục cống hiến cho bóng đá, chúng tôi lên kế hoạch gây quỹ tài năng, với nguồn tiền trích 1.000 đồng cho mỗi ly cà phê Ông Bầu bán ra. Nếu mỗi ngày bán được 1 triệu ly cà phê, sẽ có 1 tỉ đồng cho quỹ. " – bầu Đức chia sẻ.

            Bầu Đức cũng tiết lộ, quỹ đất 100.000 ha của Tập đoàn Hoàng Anh Gia Lai, có nhiều vùng trồng cà phê sẵn bằng lối canh tác tự nhiên để bổ sung nguyên liệu cho chuỗi quán cà phê Ông Bầu. "Chúng tôi cam kết cà phê đảm bảo chất lượng. Nếu ai đem cà phê Ông Bầu đi test ở bất cứ phòng xét nghiệm nào, nếu phát hiện cà phê dỏm, cứ kêu bầu Đức ra chửi" – bầu Đức khẳng định.
        `,
        },
        {
          id: 2,
          smallImg: "~/assets/images/news/2.jpg",
          bigImg: "~/assets/images/news/2_1.jpg",
          title:
            "CHÚNG TÔI SẼ HỖ TRỢ HẾT MÌNH CHO CÁC CỰU VĐV TRONG VIỆC MƯU SINH",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Sẽ làm gì sau khi giã từ đời VĐV đỉnh cao? Câu trả lời không đơn giản bởi không phải ai cũng có thể trở thành HLV, không phải ai cũng giỏi kinh doanh. Các ông bầu nổi tiếng của bóng đá VN đã cùng nhau mở thêm một hướng đi cho các VĐV trong việc mưu sinh sau khi họ giã từ sân đấu.

            Ông Hải cùng với hai doanh nhân nổi tiếng yêu và làm bóng đá từ hơn hai thập niên qua là bầu Đức (Đoàn Nguyên Đức - Hoàng Anh Gia Lai), bầu Thắng (Võ Quốc Thắng - Đồng Tâm Long An) là ba người đã góp vốn và sáng lập nên thương hiệu cà phê Ông Bầu. Ra đời từ tháng 2-2020, tính đến thời điểm này, chuỗi cà phê này đã có 100 quán ở 15 tỉnh thành trên cả nước.

            Về việc hỗ trợ cho các cựu VĐV, ông Hải cho biết: "Chúng tôi có 5 mô hình khác nhau để khởi nghiệp kinh doanh với mức vốn thấp nhất khoảng 60 triệu đồng và cao nhất là hơn 1 tỉ đồng. Tùy theo nguồn vốn của VĐV, chúng tôi sẽ thực hiện các bước đi như thẩm định địa điểm kinh doanh, tổ chức huấn luyện pha chế, thực hành, bài trí mặt bằng... Nói chung là chúng tôi sẽ hỗ trợ tới mức tốt nhất để giúp các các cựu VĐV có thu nhập sau lúc nghỉ thi đấu.

            Nếu các cựu VĐV không có vốn, chúng tôi sẽ tư vấn cặn kẽ trước lúc giới thiệu họ đến vay vốn ở ngân hàng. Với những người có nguồn vốn ít, chúng tôi sẽ cho họ được gối đầu về nguyên liệu và đào tạo để làm quen với công việc, cách chức vận hành, pha chế...".
          `,
        },
        {
          id: 3,
          smallImg: "~/assets/images/news/3.jpg",
          bigImg: "~/assets/images/news/3_1.jpg",
          title:
            "ĐẰNG SAU NỤ CƯỜI CỦA BẦU ĐỨC, BẦU THẮNG, BẦU HẢI: TIỀN NHIỀU CŨNG KHÔNG MUA ĐƯỢC!",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Cô gái trẻ tuổi đang chen giữa dòng người ở Nhà văn hóa Thanh niên cất tiếng nói thật lớn vì sợ bầu Đức không nghe thấy. Ông chủ CLB HAGL quay lại nở nụ cười hiền hòa để chụp chung với cô gái và các người bạn. 

            "Cháu đi từ Gia Lai xuống TPHCM vào sáng nay. Hôm qua cháu có đọc được thông tin là bác cùng bầu Thắng, bầu Hải, HLV Park Hang Seo, cùng các cầu thủ HAGL giao lưu ở Nhà văn hóa Thanh niên nhân dịp cà phê ông Bầu nhượng quyền tròn 100 quán. Cháu và bạn bắt xe đi xuống để mong có cơ hội gặp bác chụp tấm hình làm kỷ niệm", Đan Thùy tranh thủ kể với bầu Đức về hành trình mất hơn 8 giờ đồng hồ để vượt gần 640 cây số từ Gia Lai xuống TPHCM.

            Không chỉ có Đan Thùy, trong số hàng nghìn người có mặt ở Nhà văn hóa Thanh niên thì có nhiều fans đi từ những nơi xa xôi như Bình Phước, Bình Dương, Long An, Đồng Nai... đến TPHCM để mong được gặp các ông bầu. Họ cùng có chung ao ước là được chụp hình chung với các ông bầu. Tất cả xuất phát từ tình cảm lớn lao và sự mến mộ dành cho bầu Đức, bầu Thắng, bầu Hải.

            Bác Lê Thành Phương - một trong những người hâm mộ lớn tuổi nhất đã có cơ hội trực tiếp bày tỏ tình cảm với các ông bầu, nói một cách đầy xúc động rằng: "Tôi từ Củ Chi xuống đây. Tôi nói thật với anh Đức, anh Thắng, anh Hải là hôm nay tôi rất vui. Tôi vui vì có cơ hội được gặp trực tiếp, cũng như giao lưu với các ông bầu. Tôi yêu bóng đá trong mấy chục năm qua, tôi hiểu được sự đóng góp, cống hiến của các anh cho bóng đá Việt Nam.

            Tôi tin rằng các anh làm bóng đá tử tế, thật và sạch thì cà phê ông Bầu cũng xứng đáng được trao niềm tin như thế. Tôi không thích cà phê nhưng bây giờ đã uống đến 2 ly. Từ nay tôi sẽ uống cà phê ông Bầu để ủng hộ cho các anh. Xin chúc các anh sức khỏe và luôn là đầu tàu để đóng góp cho bóng đá nước nhà".
          `,
        },
        {
          id: 4,
          smallImg: "~/assets/images/news/4.jpg",
          bigImg: "~/assets/images/news/4_1.jpg",
          title:
            "3 CHIẾN LƯỢC KHIẾN CÀ PHÊ ÔNG BẦU TỰ TIN ĐẶT MỤC TIÊU TRỞ THÀNH CHUỖI CÀ PHÊ QUY MÔ LỚN NHẤT ĐÔNG NAM Á VÀO NĂM 2022",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Trong khoảng vài tháng trở lại đây, hàng loạt các cửa hàng mang thương hiệu Ông Bầu vàng rực rỡ được khai trương ở nhiều tỉnh thành, cho thấy ‘tay chơi mới’ này sẽ có tham vọng rất lớn ở thị trường.

            Trong buổi khai trương quán cà phê Ông Bầu thứ 100 sáng 1/7 tại TP. HCM, ông Đoàn Nguyên Đức đã chia sẻ rằng, mục tiêu của thương hiệu cà phê mới này là sẽ có 10.000 quán trong năm 2022.

            Xét theo tình hình hiện tại của thị trường chuỗi cà phê tại khu vực Đông Nam Á, nếu Ông Bầu có thể hoàn thành mục tiêu trong gần 2,5 năm nữa, họ sẽ là chuỗi cà phê có quy mô lớn nhất Đông Nam Á. Vì xét vào quá trình phát triển cũng như thị trường trong vài năm tới, những đối thủ khả dĩ có thể cạnh tranh với họ về quy mô ở thì hiện tại như Cafe Amazon, Starbucks hay Trung Nguyên; rất khó để đạt con số 10.000 quán vào 2022.

            Hiện tại, chuỗi đang đứng đầu hạng mục này là Cafe Amazon. Cafe Amazon có chủ sở hữu là Tập đoàn dầu khí Thái Lan (PTT), hiện thương hiệu này có khoảng 3.200 quán, chủ yếu tập trung tại Thái Lan cùng Đông Nam Á. Thương hiệu ra đời từ năm 2001 này thường tọa lạc ở các trạm xăng và một ít ở Trung tâm thương mại. Cuối năm 2019, có thông tin Cafe Amazone sẽ vào Việt Nam và mở cửa hàng đầu tiên vào Quý II/2020, nhưng có lẽ vì Covid-19, nên kế hoạch đã bị hoãn lại.

            Starbucks – ‘tay to’ của thế giới hiện có khoảng 1.770 cửa hàng tại khu vực Đông Nam Á; số lượng cửa hàng nhiều nhất là ở Singapore, Phillipines, Thái Lan, Indonesia, Malaysia… Tại Việt Nam, Starbucks mở khá chậm, có 64 cửa hàng sau 7 năm.
          `,
        },
        {
          id: 5,
          smallImg: "~/assets/images/news/5.jpg",
          bigImg: "~/assets/images/news/5_1.jpg",
          title: "HLV PARK: ‘BẤT CỨ KHI NÀO BẦU ĐỨC CẦN, TÔI ĐỀU CÓ MẶT’",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            - Đây là giai đoạn tôi đang đi khắp các sân thi đấu của Việt Nam để tìm nguồn cầu thủ cho đội tuyển quốc gia và đội U22 Việt Nam. Tôi vừa dự khán các trận đấu ở Quảng Nam rồi Hà Tĩnh và lẽ ra đã trở về Hà Nội để hội quân cùng các cầu thủ. Nhưng, tôi nhận được lời mời của bầu Đức, một người bạn lớn của tôi, nên có mặt ở đây. Như các bạn đều biết, nếu không có bầu Đức, tôi đã không có mặt ở Việt Nam nên khi ông ấy cần, tôi đều có mặt, trừ lúc bận chỉ đạo các cầu thủ mà thôi.

            Hôm nay, tôi đến đây chỉ để gặp mặt, chào hỏi nhân dịp bầu Đức, bầu Thắng và bầu Hải ra mắt thương hiệu cafe của họ. Tôi từng nghe bầu Đức kể về dự án bán cà phê rồi trích ra mỗi ly một ngàn đồng để sung quỹ phát triển tài năng. Đó là kế hoạch tuyệt vời và chỉ những người tâm huyết mới dám nói, dám làm như vậy.

            Sau sự kiện này, tôi sẽ bay ra Hà Nội ngay lập tức để tập trung với các cầu thủ U22 Việt Nam. Đó mới là công việc chính của tôi.

            - Mục đích tập trung đội tuyển U22 Việt Nam lần này gì?

            - Cầu thủ đợt này đều sinh năm 1999 và có rất ít cơ hội thi đấu. Ở V-League, những ai ở lứa tuổi này, nếu được ra sân, thì tôi đã kiểm chứng. Ở giải hạng Nhất cũng thế. Lần này tôi chỉ triệu tập những ai ít được thi đấu để ngày mai chia hai đội hình rồi thi đấu với nhau. Mục đích của tôi là tạo cho họ cơ hội và cảm giác thi đấu để lựa chọn trong tương lai.

            - Rất nhiều giải đấu đã bị ngưng trệ vì Covid-19. Vậy nó ảnh hưởng thế nào đến các kế hoạch của ông?

            - Bóng đá thế giới như đóng băng vì Covid-19, nhưng ở Việt Nam thì không. Các sân bóng vẫn đầy ắp khán giả, đó là điều mừng nhất.

            Tôi đang rất lo lắng vì tháng 10, Việt Nam sẽ chơi ba trận cuối cùng ở vòng loại World Cup 2020 - khu vực châu Á. Nó mang ý nghĩa vô cùng quan trọng. Trận đấu then chốt có lẽ là chuyến làm khách đến sân của Malaysia. Ở đó, đội chủ nhà nhận được sự cổ vũ của khoảng 80.000 CĐV, với những âm thanh gầm rú đáng sợ. Nhưng tôi nói vậy thôi, chứ các bạn đừng lo lắng vì các cầu thủ Việt Nam từng chiến thắng ở đó rồi. Hy vọng kết quả tốt đẹp sẽ lặp lại.
          `,
        },
        {
          id: 6,
          smallImg: "~/assets/images/news/6.jpg",
          bigImg: "~/assets/images/news/6_1.jpg",
          title: "CHUỖI CÀ PHÊ ÔNG BẦU CHÍNH THỨC RA MẮT ĐIỂM BÁN THỨ 100",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Nằm ngay trung tâm của thành phố nhộn nhịp nhất cả nước, điểm bán thứ 100 của chuỗi cà phê Ông Bầu mang màu vàng đặc trưng của thương hiệu nổi bật ngay cung đường quen thuộc của khách du lịch và giới trẻ TP.HCM. Thực đơn của quán có đủ các món bắt trend, chiều lòng khách hàng như: trà sữa, trà vải, latte, các loại sữa chua, nước thanh lọc cơ thể … bên cạnh những món đặc trưng làm nên tên tuổi, nét riêng của thương hiệu Ông Bầu như: cà phê thật giá từ 16.000 đồng hay Pandan Macchiato vừa thơm mùi lá dứa, vừa có vị béo ngọt của sữa và pha trộn vị đăng đắng đặc trưng của cà phê. 

            Chia sẻ về thức uống của cà phê Ông Bầu, bạn Ngọc Ánh, sinh viên trường đại học KHXH & NV cho biết: “Mình đăng kí lớp Anh Văn ở đây nên biết chuẩn bị có quán Ông Bầu mới. Trước đó mình có đi quán trên đường Võ Thị Sáu rồi mà hơi ngược đường. Nay có Ông Bầu ngay đây rồi tiện ghê. Mình thường uống trà sữa vì trân châu ở đây rất ngon, vừa dai dai vừa mềm mềm, ăn không bị khó tiêu. Bữa nào học mà buồn ngủ thì mình gọi cà phê sữa đá, uống cái tỉnh táo hẳn luôn”.

            Chung suy nghĩ với Ngọc Ánh là Phương Uyên, cô nhân viên văn phòng trẻ chia sẻ: “Mình biết đến Ông Bầu vì là hâm mộ Công Phượng. Thấy ảnh giới thiệu quán này nên mình cũng tò mò đi uống thử theo lời thần tượng và kết cà phê sữa đá luôn, vừa đậm đà, rất ngon mà chỉ 16 nghìn đồng. Tối không uống được cà phê nhiều thì mình chọn Pandan Macchiato, chút cà phê thôi là đủ để mai còn đi làm”.
          `,
        },
        {
          id: 7,
          smallImg: "~/assets/images/news/7.jpg",
          bigImg: "~/assets/images/news/7_1.jpg",
          title:
            "CÔNG PHƯỢNG, ĐÔNG TRIỀU 'CHÁY HÀNG' NGÀY KHAI TRƯƠNG NHÀ HÀNG VÀ CÀ PHÊ ÔNG BẦU",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Nằm ở địa chỉ 79 Bạch Đằng (quận Tân Bình), quán “Bánh tráng thịt heo ĐT5” và bán cà phê Ông Bầu đã tưng bừng khai trương sáng 7.9, với sự xuất hiện của 2 ông chủ Công Phượng - Đông Triều, ông bầu Võ Quốc Thắng (Đồng Tâm Long An) và bầu Trần Thanh Hải (NutiFood) cùng hàng ngàn fan hâm mộ.

            Có vẻ sau khi “đầu xuôi” chuyện trăm năm thì sự nghiệp kinh doanh của Công Phượng vẫn đang rất mát tay. Ở ngày khai trương quán ăn, Công Phượng và Đông Triều đã mỏi tay ký tặng hàng ngàn chiếc nón cà phê Ông Bầu.

            Đã chạy thử từ vài ngày trước khai trương, quán “Bánh tráng thịt heo ĐT5” đã đạt doanh thu rất tốt, tính sơ đã gần chục triệu đồng. Đến hôm khai trương, chưa có thống kê cuối cùng vì 2 ông chủ… quá mệt, nhưng nghe nói con số thu được cao gấp nhiều lần, về sau phải xin lỗi khách vì "cháy hàng".

            Hiện bộ đôi Công Phượng - Đông Triều vẫn đang bán với mức giá hữu nghị, mời mọi người ghé thăm nếm thử hơn là đặt nặng doanh thu như một số nơi khác. Đáng quý nhất là sự góp mặt của bầu Thắng và bầu Hải trong ngày khai trương. Thực tế ngoài bóng đá thì cà phê cũng là một đam mê khác của Công Phượng.
 
            Anh bày tỏ: “Dù chỉ uống được cà phê sữa nhưng không ngày nào tôi không thưởng thức cà phê bởi tôi cùng nhiều đồng đội khác ở HAGL lớn lên từ vùng đất cà phê. Tôi thường bắt đầu ngày mới bằng một ly cà phê để tỉnh táo rồi sau đó mới ra sân tập luyện”. 
          `,
        },
        {
          id: 8,
          smallImg: "~/assets/images/news/8.jpg",
          bigImg: "~/assets/images/news/8_1.jpg",
          title: "VÌ YÊU MÀ ĐẾN VỚI BẦU ĐỨC, BẦU THẮNG, BẦU HẢI",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Sáng nay, phó chủ tịch VFF - Cao Văn Chóng cười rạng ngời bước vào quán cà phê ông Bầu ở Bình Dương. Ông Cao Văn Chóng vốn thân thiện nên bắt tay từng phóng viên. Vị phó chủ tịch VFF hóm hỉnh tiết lộ: “Nhờ đọc thông tin trên báo Saostar nên anh biết hôm nay các anh khai trương quán cà phê. Anh đến ủng hộ các anh”.

            Vài phút sau, tiền đạo Nguyễn Anh Đức cũng xuất hiện với hình ảnh lịch lãm. Anh Đức đến ủng hộ các ông bầu và có thêm một mục đích khác. Anh tiết lộ đang kinh doanh khách sạn ở Bình Dương nên có thể cân nhắc trong việc kết hợp mở cà phê ông Bầu trong tương lai.

            Bên cạnh đó, ban huấn luyện CLB Bình Dương như HLV Nguyễn Thanh Sơn, HLV thủ môn Đức Cảnh… cũng đến rất sớm để ngồi uống cà phê, qua đó ủng hộ cho các ông chủ bóng đá.

            Một điều hết sức đáng quý và đáng trân trọng là rất đông những người khách có mặt từ sáng sớm để thưởng thức cà phê. Có những người lặn lội từ nơi xa đến thưởng thức cà phê ông Bầu vì thích bầu Đức, bầu Thắng, bầu Hải. “Nhà tôi ở cách đây hơn 30 cây số. Tôi đi từ sáng sớm để đến ủng hộ các ông chủ làm bóng đá tâm huyết nhất Việt Nam. Tôi thích dòng chữ: Sống thật, cà phê thật. Tình yêu của tôi dành cho bóng đá có thể nói được truyền cảm hứng bởi những người làm bóng đá có tâm như bầu Đức, bầu Thắng. Họ cho bóng đá Việt Nam rất nhiều, cống hiến nhiều cho xã hội. Tôi nghĩ bóng đá hay cà phê thì chữ thật là hết sức quan trọng, cứ thật thì ai cũngủng hộ…”, anh Huy Hoàng (Bình Dương) chia sẻ.

            Hơn hết, rất nhiều người yêu bóng đá đến ủng hộ khi biết có sự xuất hiện của ngôi sao Nguyễn Công Phượng. Chàng tiền đạo tuyển Việt Nam vui vẻ chụp ảnh cùng các fan hâm mộ, cũng như ký tặng cho nhiều người.

            “Thực sự, Phượng cảm thấy rất vui khi thấy nhiều người đến ủng hộ các chú. Phượng là người rất yêu cà phê, có lẽ mọi người đều biết Phượng có mở quán cà phê ở Gia Lai và Hà Nội. Phượng nghĩ một trong những điều quan trọng nhất chính là không có sự pha trộn, cà phê của các ông bầu là một sự tâm huyết về cà phê thật, sạch để mọi người yên tâm thưởng thức. Đó cũng là lý do Phượng sắp tới mở một quán ăn cùng Đồng Triều thì có bán cà phê ông Bầu”, Công Phượng nói.

            Một bầu không khí đầy nhộn nhịp và đong đầy chữ tình của bóng đá ở giữa lòng Bình Dương. Từ lãnh đạo CLB, HLV, cầu thủ đến hàng trăm người hâm mộ đã đến ủng hộ cà phê thật của bầu Đức, bầu Thắng, bầu Hải.
          `,
        },
        {
          id: 9,
          smallImg: "~/assets/images/news/9.jpg",
          bigImg: "~/assets/images/news/9_1.jpg",
          title:
            "CÔNG PHƯỢNG TÁI NGỘ ANH ĐỨC KHI CÙNG BẦU THẮNG ĐI BÌNH DƯƠNG KHAI TRƯƠNG CÀ PHÊ",
          type: "Tin tuc",
          date: "09/07/2020",
          content: `
            Sáng 16-5, quán cà phê lớn nhất thuộc chuỗi Ông Bầu đã chính thức được khai trương tại địa chỉ 253 Hoàng Văn Thụ, thành phố Thủ Dầu Một - Bình Dương. Đặc biệt, sự xuất hiện bất ngờ của các ông bầu cùng ngôi sao bóng đá Công Phượng trong ngày khai trương đã thu hút sự chú ý của đông đảo khách hàng và người dân.

            Trước đó, Công Phượng từng gây chú ý khi người bạn đang thi đấu cho CLB B.Bình Dương là trung vệ Trần Hữu Đông Triều cho biết cả hai đã hùn vốn để chuẩn bị mở một cửa tiệm bánh tráng cuốn thịt heo đặc sản Quảng Nam ở TP HCM. Công Phượng chia sẻ: "Đông Triều rủ tôi cùng mở tiệm, thấy hợp lý nên tôi đồng ý tham gia với cậu ấy. Khi quán mở, chúng tôi cũng xin phép chủ tịch Công ty NutiFood Trần Thanh Hải để đặt một xe cà phê Ông Bầu theo mô hình take-away ngay trước cửa tiệm".

            Trong ngày khai trương quán cà phê ở Bình Dương, bên cạnh sự xuất hiện của bầu Thắng, bầu Hải cùng Công Phượng, khá bất ngờ khi một số nhân vật nổi tiếng của bóng đá Việt Nam như phó chủ tịch truyền thông VFF Cao Văn Chóng, đại biểu Quốc hội Dương Trung Quốc, ban huấn luyện CLB B.Bình Dương và cả lão tướng Nguyễn Anh Đức cũng đến thưởng thức cà phê. Công Phượng và Anh Đức đã có dịp trò chuyện với nhau vì khá lâu rồi, cả hai mới gặp lại.

            Tọa lạc trên đường Hoàng Văn Thụ, khu cà phê và ăn uống nổi tiếng của thành phố mới Thủ Dầu Một, quán Ông Bầu trong ngày đầu khai trương đã thu hút sự chú ý bởi màu vàng nổi bật cùng thiết kế không gian rộng rãi, thoáng đãng theo phong cách sân vườn hiện đại. Với diện tích 750 mét vuông và 3 mặt tiền được đưa vào sử dụng, đây cũng là quán cà phê lớn nhất trong chuỗi Ông Bầu tính đến thời điểm hiện tại.
          `,
        },
      ],
      offer: [
        {
          id: 1,
          smallImg: "~/assets/images/offer/1.jpg",
          bigImg: "~/assets/images/offer/1_1.jpg",
          title: "ÔNG BẦU MILK FOAM",
          type: "Khuyen mai",
          date: "02/05/2020",
          content: `
                    Yêu không cần cớ, cần Milk Foam ngọt ngào cơ!!!

                    Một sự kết hợp độc đáo mang đến cho bạn trải nghiệm mới về cà phê sữa đá truyền thống với hương vị nhẹ nhàng hơn cùng lớp kem Milk foam sánh mịn. Thơm thơm, béo béo, không khéo sẽ khiến bạn yêu ngay lần đầu thưởng thức ^^

                    ? Đối với những món có lớp bọt sữa thế này, nhớ thưởng thức trực tiếp không cần ống hút để cảm nhận trọn vị tinh tế bạn nhé!

                    Giờ thì yêu rồi, gọi món ngay thôi nào!!
                `,
        },
        {
          id: 2,
          smallImg: "~/assets/images/offer/2.jpg",
          bigImg: "~/assets/images/offer/2_1.jpg",
          title: "CÀ PHÊ ÔNG BẦU HUẾ KHAI TRƯƠNG",
          type: "Khuyen mai",
          date: "01/05/2020",
          content: `
                    Huế mộng mơ ơi!!! Cà Phê Ông Bầu đến đây !!!

                    Một bất ngờ nho nhỏ khi Cà Phê Ông Bầu âm thầm xuất hiện tại Huế, không biết các bạn ở đây có phát hiện ra trước không nhỉ ? Quán tọa lạc tại 362 Phan Chu Trinh, Phường An Cựu, con đường dọc theo Sông An Cựu.

                    Quán tuy nhỏ nhưng ấm áp ^^ Từ giờ các bạn ở Huế đã có thêm một quán cà phê để nhâm nhi hằng ngày rồi nhé ❤

                    ? Đặc biệt quán sẽ có khuyến mãi MUA 3 TẶNG 1 từ 30/4 - 15/05
                `,
        },
      ],
    };
  },
  methods: {
    labelMaxLines(label, maxLines) {
      let line = Math.max(Number(maxLines) || 0, 1);
      if (label.android) {
        label.android.setMaxLines(line);
        label.android.setEllipsize(android.text.TextUtils.TruncateAt.END);
      } else if (label.ios) {
        label.ios.numberOfLines = line;
        label.ios.adjustsFontSizeToFitWidth = false;
        label.ios.lineBreakMode = NSLineBreakMode.ByTruncatingTail;
      }
    },
    labelOnLoaded(args) {
      let maxLines = 4;
      this.labelMaxLines(args.object, maxLines);
    },
    onTab(e) {
      this.$navigateTo(Chitiettin, {
        transition: {
          name:'slide',
          duration:300
        },
        props: {
          data: e,
        },
      });
    },
  },
};
</script>