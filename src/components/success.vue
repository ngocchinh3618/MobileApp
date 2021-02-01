<template>
  <Page actionBarHidden="true">
    <StackLayout padding="50" backgroundColor="yellow">
      <Label fontSize="25" fontWeight="600" text="Bạn đã đặt hàng thành công" textWrap="true"   />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  methods:{
    closed(){
      setTimeout(()=>this.$modal.close(),3000)
    }
  },
  mounted(){
    this.closed()
  }
}
</script>