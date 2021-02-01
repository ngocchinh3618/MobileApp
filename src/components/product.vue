<template>
  <Page actionBarHidden="true">
    <TabView :selectedIndex="tabIndex" marginBottom="70">
      <TabViewItem title="Show All">
        <ScrollView>
          <StackLayout>
            <GridLayout
              rows="*"
              columns="*, *"
              if="rowCount>0"
              v-for="i in rowCount"
              :key="i"
            >
            <!-- cach chia chăn lẻ. i chạy từ 1->4 (1-1)*2=0 => 0, -->
              <card-view
              
                class="card"
                margin="10"
                col="0"
                elevation="20"
                v-if="
                  Items[(i - 1) * itemsPerRow] &&
                  Items[(i - 1) * itemsPerRow].ten
                "
                
                @tap="seeDetails(Items[(i - 1) * itemsPerRow])"
                
              >
                <GridLayout
                  class="card-layout"
                  rows="120, auto,auto,auto"
                  columns="*, *, *"
                >
                  <Image
                    v-if="Items[(i - 1) * itemsPerRow].hinh"
                    :src="Items[(i - 1) * itemsPerRow].hinh"
                    stretch="aspectFill"
                    colSpan="3"
                    row="0"
                    width="120"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow].ten"
                    class=""
                    row="1"
                    colSpan="3"
                    fontSize="20"
                    fontWeight="600"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow].gia | dollars"
                    class=""
                    row="2"
                    colSpan="3"
                    fontSize="18"
                  />
                  <Button
                    row="3"
                    colSpan="3"
                    text="Buy"
                    @tap="addItem(Items[(i - 1) * itemsPerRow])"
                    class="btn m-t-10 add-button"
                    
                  />
                </GridLayout>
              </card-view>
              <card-view
                class="card"
                margin="10"
                col="1"
                elevation="20"
                v-if="
                  Items[(i - 1) * itemsPerRow + 1] &&
                  Items[(i - 1) * itemsPerRow + 1].ten
                "
                @tap="seeDetails(Items[(i - 1) * itemsPerRow + 1])"
              >
                <GridLayout
                  class="card-layout"
                  rows="120, auto,auto,auto"
                  columns="*, *, *"
                >
                  <Image
                    v-if="Items[(i - 1) * itemsPerRow + 1].hinh"
                    :src="Items[(i - 1) * itemsPerRow + 1].hinh"
                    stretch="aspectFill"
                    colSpan="3"
                    row="0"
                    width="120"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow + 1].ten"
                    class=""
                    row="1"
                    colSpan="3"
                    fontSize="20"
                    fontWeight="600"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow + 1].gia | dollars"
                    class=""
                    row="2"
                    colSpan="3"
                    fontSize="18"
                  />
                  <Button
                    row="3"
                    colSpan="3"
                    text="Buy"
                    @tap="addItem(Items[(i - 1) * itemsPerRow + 1])"
                    class="btn m-t-10 add-button"
                  />
                </GridLayout>
              </card-view>
            </GridLayout>
          </StackLayout>
        </ScrollView>
      </TabViewItem>
      <TabViewItem v-for="d in Menu" :key="d" :title='d'>
        <ScrollView>
          <StackLayout>
            <GridLayout
              rows="*"
              columns="*, *"
              if="rowCount>0"
              v-for="i in rowCount"
              :key="i"
            >
              <card-view
                class="card"
                margin="10"
                col="0"
                elevation="20"
                v-if="
                  Items[(i - 1) * itemsPerRow] &&
                  Items[(i - 1) * itemsPerRow].loai == d
                "
                @tap="seeDetails(Items[(i - 1) * itemsPerRow])"
              >
                <GridLayout
                  class="card-layout"
                  rows="120, auto,auto,auto"
                  columns="*, *, *"
                >
                  <Image
                    v-if="Items[(i - 1) * itemsPerRow].hinh"
                    :src="Items[(i - 1) * itemsPerRow].hinh"
                    stretch="aspectFill"
                    colSpan="3"
                    row="0"
                    width="120"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow].ten"
                    class=""
                    row="1"
                    colSpan="3"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow].gia | dollars"
                    class=""
                    row="2"
                    colSpan="3"
                  />
                  <Button
                    row="3"
                    colSpan="3"
                    text="Buy"
                    @tap="addItem(Items[(i - 1) * itemsPerRow])"
                    class="btn m-t-10 add-button"
                  />
                </GridLayout>
              </card-view>
              <card-view
                class="card"
                margin="10"
                col="1"
                elevation="20"
                v-if="
                  Items[(i - 1) * itemsPerRow + 1] &&
                  Items[(i - 1) * itemsPerRow + 1].loai == d
                "
                @tap="seeDetails(Items[(i - 1) * itemsPerRow + 1])"
              >
                <GridLayout
                  class="card-layout"
                  rows="120, auto,auto,auto"
                  columns="*, *, *"
                >
                  <Image
                    v-if="Items[(i - 1) * itemsPerRow + 1].hinh"
                    :src="Items[(i - 1) * itemsPerRow + 1].hinh"
                    stretch="aspectFill"
                    colSpan="3"
                    row="0"
                    width="120"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow + 1].ten"
                    class=""
                    row="1"
                    colSpan="3"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow + 1].gia | dollars"
                    class=""
                    row="2"
                    colSpan="3"
                  />
                  <Button
                    row="3"
                    colSpan="3"
                    text="Buy"
                    @tap="addItem(Items[(i - 1) * itemsPerRow + 1])"
                    class="btn m-t-10 add-button"
                  />
                </GridLayout>
              </card-view>
            </GridLayout>
          </StackLayout>
        </ScrollView>
      </TabViewItem>
    </TabView>
  </Page>
</template>
<script>
//   const carousel = require('nativescript-carousel');
import Detailpd from "./detailpd"
export default {
  data() {
    return {
      Menu:[
        'cafe',
        'Latte nóng',
        'Latte đá',
        'Đá xay',
        'Trà',
        'Sữa chua'

      ],
      Items: [
        {
          id: 1,
          ten: "Americano",
          gia: "20000",
          mota:
            "Americano với hương vị cà phê dễ chịu, nhẹ nhàng không quá đậm đắng nhưng vẫn đầy đủ sự tinh tế để chinh phục người yêu cà phê trên toàn thế giới.",
          hinh: "~/assets/images/sp/CAPHE_Americano.png",
          loai: "cafe",
        },
        {
          id: 2,
          ten: "Cà phê đen",
          gia: "16000",
          mota:
            'Cà phê đen truyền thống, đúng điệu của người Việt được tuyển chọn, pha chế từ những hạt cà phê Robusta tốt nhất tại nông trường CADA với lịch sử gần 100 năm tuổi. Hương thơm mộc mạc của "cà phê thật" bao giờ cũng khiến chúng ta say đắm.',
          hinh: "~/assets/images/sp/CAPHE_Cafe den da.png",
          loai: "cafe",
        },
        {
          id: 3,
          ten: "Sữa đá milk foam",
          gia: "20000",
          mota:
            "Một sự kết hợp độc đáo mang đến trải nghiệm mới về cà phê sữa đá truyền thống. Với hương vị nhẹ nhàng hơn cùng lớp kem Milk foam sánh mịn thơm béo, sẽ khiến bạn yêu ngay từ lần đầu thưởng thức.",
          hinh: "~/assets/images/sp/CAPHE_Cafe sua Milk Foam.png",
          loai: "cafe",
        },
        {
          id: 4,
          ten: "Cà phê sữa",
          gia: "18000",
          mota:
            "Cà phê sữa đá Ông Bầu là sự kết hợp hòa quyện bởi những hạt cà phê CADA danh tiếng thêm chút ngọt béo của sữa đặc mang lại ly cà phê sữa đá đậm vị Việt Nam đã và đang chinh phục nhưng người yêu cà phê trên Thế Giới",
          hinh: "~/assets/images/sp/CAPHE_Cafe sua da.png",
          loai: "cafe",
        },
        {
          id: 8,
          ten: "Chocolate trứng đá",
          gia: "29000",
          mota:
            "To make the best tasting turkey gravy you need three things; well-seasoned fat, flour, and a good rich broth. For each cup of finished gravy you will need one tablespoon of fat, one tablespoon of flour and 1 cup of broth and a good rich broth",
          hinh: "~/assets/images/sp/LATTEDA_Pandan Macchiato.png",
          loai: "Latte đá",
        },
        {
          id: 9,
          ten: "Mocha Macchiato",
          gia: "26000",
          mota:
            "Vị đắng nhẹ, ngọt êm của sốt chocolate khi kết hợp cùng Macchiato truyền thống mang đến một ly thức uống đậm đà, tinh tế hơn bao giờ hết.",
          hinh: "~/assets/images/sp/LATTEDA_Mocha Macchiato.png",
          loai: "Latte đá",
        },
        {
          id: 10,
          ten: "Hồng trà Latte",
          gia: "26000",
          mota:
            "Latte truyền thống vốn được làm từ cà phê, sữa tươi và bọt sữa nay kết hợp với Hồng trà mang hương thơm thanh mát, ngọt nhẹ sẽ làm ngây ngất những ai yêu trà và thức uống latte.",
          hinh: "~/assets/images/sp/LATTEDA_Hong tra latte.png",
          loai: "Latte đá",
        },
        {
          id: 11,
          ten: "Matcha Latte",
          gia: "26000",
          mota:
            "Hương thơm thanh mát, vị đắng tinh tế của trà xanh hòa cùng sữa tươi thơm béo, sánh mịn chắc chắn sẽ khiến các tín đồ của latte thích thú với sự kết hợp này. Đây là món uống không có cà phê (caffein)",
          hinh: "~/assets/images/sp/LATTEDA_Matcha Latte.png",
          loai: "Latte đá",
        },
        {
          id: 12,
          ten: "Caramel Cà phê",
          gia: "35000",
          mota:
            "Cà phê Espresso CADA thơm ngon kết hợp với hương vị ngọt ngào của Caramel, thêm chút chút đá xay mịn không chỉ mát lạnh giải nhiệt mà còn nạp thêm năng lượng cho một ngày đầy hứng khởi.",
          hinh: "~/assets/images/sp/SINHTO_Caramen Ca phe.png",
          loai: "Đá xay",
        },
        {
          id: 13,
          ten: "Sinh tố dền sữa",
          gia: "35000",
          mota:
            'Thức uống lạ mắt trong "từ điển sinh tố" lại còn bổ dưỡng và ngon lành. Ly sinh tố dền sữa thơm ngon này không những rất tốt cho sức khỏe của chúng ta, nhất là hệ miễn dịch mà còn giúp giải nhiệt thanh mát cả ngày.',
          hinh: "~/assets/images/sp/SINHTO_Sinh to Den sua.png",
          loai: "Đá xay",
        },
        {
          id: 14,
          ten: "Cà phê dừa",
          gia: "35000",
          mota:
            "Một phiên bản sảng khoái hơn dừa đá xay với một chút đắng nhẹ tinh tế của cà phê bên trên mang đến một thức uống mát lạnh và thú vị.",
          hinh: "~/assets/images/sp/SINHTO_Matcha dua.png",
          loai: "Đá xay",
        },
        {
          id: 15,
          ten: "Vải đá xay",
          gia: "35000",
          mota:
            "Thức uống mát lạnh sảng khoái khiến bạn thích mê ngay ngụm đầu tiên. Sự hòa quyện của hương vị trái vải chua chua ngọt ngọt và chút ngọt béo của sữa cho ra một ly Vải đá xay thanh mát, đầy thú vị.",
          hinh: "~/assets/images/sp/SINHTO_Vai da xay.png",
          loai: "Đá xay",
        },
        {
          id: 16,
          ten: "Trà việt quất boba - S",
          gia: "26000",
          mota:
            "Với màu sắc trà đẹp mắt, vị chát nhẹ của trà đen cùng các hạt boba chua chua ngọt ngọt vỡ tan trong miệng, vị ngọt vị chua hòa cùng vị trà thanh mát rất dễ khiến bạn thích mê của thức uống này.",
          hinh: "~/assets/images/sp/TRA_Tra viet quat boba.png",
          loai: "Trà",
        },
        {
          id: 17,
          ten: "Trà vải - S",
          gia: "26000",
          mota:
            "Thức uống thanh mát giải nhiệt từ trái vải quen thuộc của vùng nhiệt đới kết hợp cùng trà đen đặc trưng thơm ngon.",
          hinh: "~/assets/images/sp/TRA_Tra vai.png",
          loai: "Trà",
        },
        {
          id: 18,
          ten: "Hồng trà milk foam - S",
          gia: "26000",
          mota:
            "Milk foam béo ngọt hoà quyện cùng vị chát nhẹ của trà sẽ khiến vị giác của bạn thêm kích thích, uống một ngụm sẽ lại muốn uống ngay ngụm thứ hai.",
          hinh: "~/assets/images/sp/TRA_Hong Tra Milk Foam.png",
          loai: "Trà",
        },
        {
          id: 19,
          ten: "Trà đào - S",
          gia: "26000",
          mota:
            "Sự hấp dẫn của trà đào đơn giản đến từ sự giản dị của thức uống này với sự kết hợp của hương vị trái đào tươi thanh ngọt trên nền trà đen chát nhẹ, kích thích vị giác của bạn ngay lần đầu thưởng thức.",
          hinh: "~/assets/images/sp/TRA_Tra dao.png",
          loai: "Trà",
        },
        {
          id: 20,
          ten: "Sữa chua uống ổi hồng",
          gia: "32000",
          mota:
            "Sữa chua uống là thức uống rất tốt cho sức khỏe, đặc biệt với hệ tiêu hóa và miễn dịch. Nay kết kết hợp cùng vị Ổi hồng thơm mát cho bạn một thức uống thơm ngon và bổ dưỡng.",
          hinh: "~/assets/images/sp/TRA_Tra oi hong boba.png",
          loai: "Sữa chua",
        },
        {
          id: 21,
          ten: "Sữa chua cà phê",
          gia: "32000",
          mota:
            "Sữa chua mịn màng chua chua ngọt ngọt thêm chút cà phê đắng nhẹ là sự kết hợp chưa bao giờ thôi làm người uống thương nhớ, bạn đã thử Sữa chua cà phê của Ông Bầu chưa?",
          hinh: "~/assets/images/sp/SUACHUA_Sua chua ca phe.png",
          loai: "Sữa chua",
        },
        {
          id: 22,
          ten: "Sữa chua trân châu",
          gia: "32000",
          mota:
            "Sự kết hợp mới mẻ của sữa chua mát lạnh và hạt trân châu giòn giòn sần sật, ngọt nhẹ vị caramel sẽ khiến bạn thấy thú vị đến ngụm cuối cùng khi thưởng thức đấy.",
          hinh: "~/assets/images/sp/SUACHUA_Sua chua tran chau.png",
          loai: "Sữa chua",
        },
        {
          id: 23,
          ten: "Sữa chua uống vải",
          gia: "32000",
          mota:
            "Sữa chua uống là thức uống rất tốt cho sức khỏe, đặc biệt với hệ tiêu hóa và miễn dịch. Nay kết kết hợp cùng vị Vải tươi thơm mát cho bạn một thức uống thơm ngon và bổ dưỡng.",
          hinh: "~/assets/images/sp/SUACHUA_Sua chua uong vai.png",
          loai: "Sữa chua",
        },
        {
          id: 5,
          ten: "Cappuccino",
          gia: "26000",
          mota:
            "Sự kết hợp của Espresso nồng nàn hòa quyện cùng sữa nóng thơm dịu, lớp bọt sữa bồng bềnh tạo nên tách Cappuccino truyền thống thơm ngon, sánh mịn.",
          hinh: "~/assets/images/sp/MONNONG_Cappuccino.png",
          loai: "Latte nóng",
        },
        {
          id: 6,
          ten: "Cappuccino Trà xanh",
          gia: "26000",
          mota:
            "Cappuccino trà xanh mang đậm hương vị tươi mát, đắng nhẹ của trà xanh hòa quyện cùng bọt sữa tươi sẽ mang đến cho bạn trải nghiệm vị giác hoàn hảo nhất. Đây là món uống không có cà phê (Caffeine).",
          hinh: "~/assets/images/sp/MONNONG_Cappuccino Matcha.png",
          loai: "Latte nóng",
        },
        {
          id: 7,
          ten: "Cappuccino Hồng ngọc",
          gia: "26000",
          mota:
            "Sự kết hợp mới lạ của hương vị thanh ngọt từ củ dền đỏ thêm chút béo béo của bọt sữa tươi mịn màng mang đến một ly Cappuccino hồng ngọc sáng tạo đầy khác biệt. Đây là món uống không có cà phê (Caffeine)",
          hinh: "~/assets/images/sp/MONNONG_Cappuccino Hong Ngoc.png",
          loai: "Latte nóng",
        },
      ],
      itemsPerRow: 2,
    };
  },
  computed: {
    rowCount: function () {
      return Math.ceil(this.Items.length / this.itemsPerRow);
    },
  },
  filters: {
    dollars: (num) => `${num} đ`,
  },
  methods: {
    seeDetails(item) {
      this.$showModal(Detailpd,{
        props: {
          data: item,
        },
      });
    },
    addItem(item) {
      console.log("Adding item:");
      console.dir(item);
    },
    // carousel
    onTextRecognitionResult() {
      console.log("onTextRecognitionResult");
    },
    myChangeEvent: function (args) {
      var changeEventText = "Page changed to index: " + args.index;
      console.log(changeEventText);
    },
  },
};
</script>
