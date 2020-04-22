<template>
  <div>
    <div :class="$style.links">
      <router-link to="/" :class="$style.link">Main</router-link>
      <router-link to="/about" :class="$style.link">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
