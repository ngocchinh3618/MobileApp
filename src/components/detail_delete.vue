<template>
  <Page>
    <ActionBar>
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
      
      <Label :text="data.title"></Label>
    </ActionBar>
    <ScrollView>
      <StackLayout padding="30" >
        <Image :src="data.img" stretch="fill" height="300" />
        <Label :text="data.title" fontWeight="500" fontSize="24" textWrap="true"></Label>
        <Label :text="data.date"></Label>
        <Label :text="data.template" textWrap="true" color="black"></Label>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
export default {
  props: ["data"],
  data(){
      return{
          
      }
  },
  methods: {},
};
</script>