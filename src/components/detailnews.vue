<template>
  <Page>
    <ActionBar>
      <NavigationButton
        text="Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
      <Label :text="data.title" textWrap="true" />
    </ActionBar>
    <ScrollView>
      <StackLayout>
      <Image :src="data.bigImg" stretch="fill" height="300" width="100%" />
      <Label fontWeight="600" fontSize="20" :text="data.title" textWrap="true" />
      <Label  fontSize="17" :text="data.date" textWrap="true" />
      <Label fontSize="17" :text="data.content" textWrap="true" />
    </StackLayout>
    </ScrollView>
    
  </Page>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>
