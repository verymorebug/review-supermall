<template>
  <div class = "profile">

    <profile-title></profile-title>
    <profile-account-message></profile-account-message>
    <profile-select-item/>

  </div>
</template>

<script>

import ProfileTitle from "./childComps/ProfileTitle";
import ProfileAccountMessage from "@/views/profile/childComps/ProfileAccountMessage";
import ProfileSelectItem from "./childComps/ProfileSelectItem";

export default {
  name: "Profile",
  components:{

    ProfileAccountMessage,
    ProfileTitle,
    ProfileSelectItem,

  }

}
</script>

<style scoped>



</style>