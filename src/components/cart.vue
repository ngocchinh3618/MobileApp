<template>
  <Page>
    <ActionBar backgroundColor="white">
      <Label fontSize="18" text="Giỏ hàng của bạn" textWrap="true" />
    </ActionBar>
    <StackLayout>
      <Label
        fontSize="18"
        text="Chi tiết đơn hàng"
        textWrap="true"
        padding="30"
        backgroundColor="#D3D3D3"
      />
      <ScrollView>
        <StackLayout backgroundColor="white">
          <GridLayout
            padding="10 0"
            rows="65,15"
            columns="150,100,*,auto,auto"
            v-for="(i,e) in sp"
            :key="e"
          >
            <StackLayout col="0">
              <Button
                :text="i.sl"
                class="add-button2"
                width="30%"
                @tap="update(i)"
                marginTop="15"
              />
              <!-- horizontalAlignment="left" -->
            </StackLayout>
            <Image col="1" marginRight="30" stretch="fill" :src="i.hinh" />

            <Label
              fontSize="18"
              :text="i.ten"
              textWrap="true"
              col="2"
              verticalAlignment="center"
            />

            <Label
              fontSize="18"
              verticalAlignment="center"
              text="xoá"
              textWrap="true"
              col="3"
              marginRight="30"
            >
              <FormattedString>
                <Span text="xóa" @linkTap="del(i)"> </Span>
              </FormattedString>
            </Label>
            <Label
              fontSize="18"
              verticalAlignment="center"
              :text="i.gia"
              textWrap="true"
              col="4"
              marginRight="30"
            />
            <Label
              row="1"
              col="0"
              colSpan="5"
              text=""
              class="about-heading"
              textWrap="true"
            />
          </GridLayout>

          <GridLayout
            backgroundColor="white"
            padding="10 0"
            rows="*"
            columns="*,*"
          >
            <Label
              fontSize="18"
              verticalAlignment="center"
              text="Tong"
              textWrap="true"
              col="0"
              marginLeft="50"
            />
            <Label
              @loaded="sum"
              col="1"
              :text="tong"
              textWrap="true"
              textAlignment="right"
              marginRight="30"
              fontSize="18"
            />
          </GridLayout>
          <Button fontSize="20" :isEnabled="flag"	 @tap="clear" text="Đặt hàng" backgroundColor="yellow" />
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import Detailpd2 from "./detailpd2";
import Success from "./success"
import Index from "./index"
export default {
  data() {
    return {
      tong: 0,
      sp: this.$sp ? this.$sp : new Array(),
      flag:this.$sp.length?true:false
    };
  },
  methods: {
    sum() {
      this.sp.forEach((f) => {
        f.gia = Number(f.gia);
        this.tong += f.sl * f.gia;
        return this.tong;
      });
    },
    del(i) {
      this.tong = 0;
      this.sp.splice(this.sp.indexOf(i), 1);
      this.sp.length ? this.sum() : (this.tong = 0);
      if(!this.sp.length) this.disable() 

    },
    update(e) {
      this.$showModal(Detailpd2, {
        props: {
          data: e,
        },
      });
      
    },
    clear(){
      this.tong = 0;
      this.sp.splice(0, this.sp.length);
      this.$showModal(Success)
      setTimeout(()=>{this.$navigateTo(Index,{frame:'home-page'})},3000)
    },
    disable(){
      this.flag=false
    }
  }
};
</script>