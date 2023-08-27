<template>
  <!-- <div class="container"> -->
  <div>
    <ul class="navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li class="dropdown" @click="toggleDropdown">
        <a href="#" class="dropbtn">Services &#9662;</a>
        <div class="dropdown-content" v-show="isDropdownOpen">
          <p href="#">Service 1</p>
          <p href="#">Service 2</p>
          <p href="#">Service 3</p>
        </div>
      </li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
<!-- </div> -->
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const isDropdownOpen = ref(false);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    return {
      isDropdownOpen,
      toggleDropdown,
    };
  },
};
</script>

<style>
.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  background-color: #f1f1f1;
  /* z-index: 99999999 !important; */
}

.navbar li {
  float: left;
}

.navbar li a,
.dropbtn {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar li a:hover,
.dropdown:hover .dropbtn {
  background-color: #ddd;
}

.dropdown-content {
  display: none;
  height: 200px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
