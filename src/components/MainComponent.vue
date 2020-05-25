<template>
  <div class="hello">
    <vue-headful
      title="checkin | antoni_"
      description="checkin is a tool made by antoni_"
    />
    <div class="top-container">
      <div class="top-container--checkin" v-if="status !== 'in'">
        <h3>
          Welcome to
          <img src="~@/assets/antoni-logo.png" alt="" />
        </h3>

        <!-- first input: Name -->
        <label for="name">Name</label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="name.surname"
          v-model="name"
        />

        <!-- secont input: Floor -->
        <select v-model="floorSelected" class="select-floor" name="floor">
          <option disabled value="">floor</option>
          <option v-for="(floor, index) in floors" :key="index">{{
            floor
          }}</option>
        </select>

        <!-- check-in button -->
        <button @click="handleNameAdd">CHECK IN</button>
      </div>

      <!-- quick reminder box: wash your hands -->
      <div class="top-container--info" v-if="showInfo">
        <div class="top-container--info-content">
          <h5>Don't forget to</h5>
          <span>
            <svg width="108" height="99" xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="nonzero" fill="none">
                <path
                  d="M98.259 28.139V18.045c0-.984-.808-1.782-1.805-1.782h-3.451v-4.998h1.304c.997 0 1.804-.802 1.804-1.781v-5.92h3.83c.998 0 1.806-.802 1.806-1.782S100.939 0 99.942 0l-5.6.004c-.013 0-.022-.004-.03-.004L69.454.036 51.467 3.408a1.78 1.78 0 00-1.435 2.08c.167.855.92 1.452 1.773 1.452.113 0 .226-.013.338-.036l17.655-3.336h5.64v5.916c0 .984.808 1.781 1.805 1.781h1.304v4.998h-3.452c-.997 0-1.805.802-1.805 1.782v10.094c-5.45.579-9.723 5.1-9.723 10.632 0 .985.808 1.782 1.805 1.782.997 0 1.805-.802 1.805-1.782 0-3.964 3.266-7.18 7.277-7.18h22.659c4.01 0 7.278 3.22 7.278 7.18v49.48c0 3.965-3.267 7.181-7.278 7.181H74.459c-4.011 0-7.278-3.22-7.278-7.18 0-.985-.807-1.782-1.804-1.782-.998 0-1.805.801-1.805 1.781C63.572 94.176 68.454 99 74.459 99h22.654C103.118 99 108 94.176 108 88.251v-49.48c-.018-5.532-4.29-10.049-9.741-10.632zM92.502 3.564v4.133H79.038V3.564h13.464zm-10.36 7.701h7.247v4.998h-7.246v-4.998zm-5.256 16.758v-8.196h17.759v8.196H76.886z"
                  fill="#FFF"
                />
                <path
                  d="M51.498 30C55.637 30 59 26.945 59 23.19c0-3.111-4.878-10.872-5.854-12.393-.686-1.063-2.61-1.063-3.292 0C48.878 12.323 44 20.08 44 23.19c0 3.755 3.363 6.81 7.498 6.81zm0-14.778c1.981 3.37 3.691 6.836 3.691 7.968 0 1.85-1.657 3.349-3.691 3.349s-3.692-1.504-3.692-3.349c0-1.128 1.715-4.593 3.692-7.968z"
                  fill="#25A7FF"
                />
                <path
                  d="M75.343 78.172l12.682-6.88c1.448-.753 2.485-2.14 2.842-3.798.356-1.657-.01-3.34-1.015-4.62a5.7 5.7 0 00-5.928-2.092 5.15 5.15 0 00-.84-1.846c-1.511-2.101-4.394-2.784-6.686-1.585l-.099.054c-.857-3.597-3.772-6.412-7.43-7.144-.06-.467-.222-1.136-.55-2.079a11.621 11.621 0 00-1.165-2.42 11.894 11.894 0 00-3.817-3.803 12.194 12.194 0 00-6.284-1.765c-2.766 0-5.414.943-7.534 2.672-2.152-2.465-5.23-3.866-8.55-3.866-6.023 0-10.98 4.715-11.328 10.628-6.095.633-10.778 5.752-10.778 11.921 0 .216.004.431.018.651a40.671 40.671 0 00-8.067 4.773H1.99c-1.101 0-1.99.89-1.99 1.985v17.318c0 1.096.893 1.985 1.99 1.985l9.415-.004c4.232.372 12.299 1.086 12.57 1.118l17.224 1.53c.695.06 1.38.095 2.071.095 8.725 0 17.243-4.706 24.76-8.855.685-.363 4.854-2.64 7.313-3.973zm4.516-16.919c.198.27.266.624.185.983a1.18 1.18 0 01-.334.602 13.65 13.65 0 00-2.184-1.585l.74-.386a1.233 1.233 0 011.593.386zm-39.706 4.06c.257.116.537.165.952.17l17.45-3.35c.875 0 1.588.71 1.588 1.59 0 .799-.595 1.472-1.484 1.59l-22.183 6.15a1.987 1.987 0 00-1.742 1.972c0 1.001.758 1.84 1.755 1.962l9.461 1.136c9.32 1.127 18.57-.687 26.758-5.227l11.807-6.533a1.717 1.717 0 012.17.499c.293.372.401.88.288 1.392-.108.507-.415.92-.839 1.136l-12.388 6.712c-2.36 1.289-6.93 3.776-7.648 4.176-7.647 4.22-16.282 9.003-24.551 8.28l-15.105-1.343-14.73-1.31-7.733-.014V70.947h7.539c.47 0 .925-.166 1.29-.467.063-.054 6.226-5.168 13.675-6.55 7.21-1.348 13.426 1.274 13.67 1.382zm32.424-5.703c0 .588-.095 1.167-.27 1.72a1.955 1.955 0 00.121 1.517c.244.476.659.826 1.173.988a9.355 9.355 0 012.373 1.127l-5.206 2.882c-5.937 3.287-16.043 5.959-24.227 5.425l12.953-4.113c2.17-1.181 4.633-2.515 4.633-5.433 0-3.058-2.486-5.541-5.68-5.541h-.023l-17.112 3.322c-2.003-.79-8.21-2.828-15.551-1.472-.98.18-1.931.417-2.856.65.442-4.018 3.866-7.148 8.017-7.148.19 0 .397.005.618.027.618.036 1.182-.166 1.615-.62.433-.457.627-1.05.533-1.63a7.007 7.007 0 01-.073-1.01c0-4.04 3.303-7.327 7.368-7.327 2.738 0 5.238 1.5 6.505 3.902.298.597.894.996 1.593 1.055.686.031 1.358-.22 1.76-.759 1.8-2.425 5.224-3.556 8.549-2.761 1.538.354 2.928 1.392 4.137 3.07a7.884 7.884 0 011.466 4.311l.005.274a1.99 1.99 0 001.994 1.985c3.077-.005 5.585 2.492 5.585 5.559z"
                  fill="#FFF"
                />
                <path
                  d="M18.5 51c4.137 0 7.5-3.366 7.5-7.498C26 39.371 22.637 36 18.5 36c-4.137 0-7.5 3.366-7.5 7.498C11 47.629 14.367 51 18.5 51zm0-10.973a3.481 3.481 0 013.477 3.475 3.477 3.477 0 01-6.954 0 3.484 3.484 0 013.477-3.475zM33 35c3.306 0 6-2.693 6-5.998S36.31 23 33 23s-6 2.697-6 6.002C27 32.307 29.694 35 33 35zm-2.572-5.998A2.574 2.574 0 0133 26.432a2.574 2.574 0 012.572 2.57 2.573 2.573 0 01-5.144 0z"
                  fill="#25A7FF"
                />
              </g>
            </svg>
          </span>
          <span>
            <svg width="108" height="108" xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="nonzero" fill="none">
                <path
                  d="M75.5 45C69.6 45 65 49.8 65 56h3.5c0-4.2 3-7.3 7-7.3s7 3.1 7 7.3H86c0-6.2-4.6-11-10.5-11zM32.5 45C26.6 45 22 49.8 22 56h3.5c0-4.2 3-7.3 7-7.3s7 3.1 7 7.3H43c0-6.2-4.6-11-10.5-11z"
                  fill="#25A7FF"
                />
                <path
                  d="M54 0a54 54 0 10.1 108.1A54 54 0 0054 0zm0 3.6A50.5 50.5 0 01104.2 50l-49-40.6c-.7-.5-1.7-.5-2.3 0L3.8 50C5.8 24 27.5 3.6 54 3.6zm33.6 67a9 9 0 00-8.4-5.8H28.8a9 9 0 00-8.4 5.9l-16.6-12-.2-3.9L54 13.1l50.4 41.7-.2 3.8-16.6 12zM23.4 93.6V73.8c0-3 2.4-5.4 5.4-5.4h50.4c3 0 5.4 2.4 5.4 5.4v19.7c-.5 1.1-4.3 3.6-5.4 3.7H28.8c-1 0-4.9-2.6-5.4-3.7zM4.5 63.6l15.3 11.1V91A50.4 50.4 0 014.5 63.6zM54 104.4c-6.6 0-13-1.3-18.7-3.6h37.4a50.1 50.1 0 01-18.7 3.6zM88.2 91V74.7l15.3-11A50.4 50.4 0 0188.2 91z"
                  fill="#FFF"
                />
              </g>
            </svg>
          </span>
          <button type="button" name="button" @click="hideInfo">Got it!</button>
        </div>
      </div>
    </div>

    <!-- Counter container -->
    <div class="bottom-container">
      <ul>
        <h5>
          antonis in the building
        </h5>
        <h5>{{ this.firebase.names.length }}</h5>
        <li class="table-info">
          <p>Name</p>
          <span>Floor</span>
        </li>
        <li v-for="person in firebase.names" v-bind:key="person.id">
          <p>{{ person.name }}</p>
          <span>{{ person.floor }}</span>

          <!-- check out any user -->
          <!-- <button
            type="button"
            name="button"
            @click="checkoutPerson(person.id)"
          >
            x
          </button> -->
        </li>
      </ul>

      <!-- Check out button -->
      <button class="checkout-btn" v-if="status === 'in'" @click="checkOutBtn">
        Check-out
      </button>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";

// FIREBASE settings
// get these from the Firebase Dashboard
firebase.initializeApp({
  apiKey: "YOUR-API-KEY-FROM-FIREBASE",
  authDomain: "YOUR-DOMAIN-FROM-FIREBASE",
  databaseURL: "YOUR-URL-KEY-FROM-FIREBASE",
  projectId: "PROJECT-ID",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

const database = firebase.database().ref("/users");

export default {
  data: function() {
    return {
      firebase: {
        names: []
      },
      name: "",
      floorSelected: "",
      floors: ["1", "3", "4", "5", "6"],
      status: "unknown",
      showInfo: false
    };
  },
  methods: {
    // hide info box
    hideInfo() {
      this.showInfo = !this.showInfo;
    },

    // get firebase users
    getFirebaseUsers() {
      this.firebase.names = [];
      database.once("value", users => {
        users.forEach(user => {
          var userDate = new Date(user.val().createdAt);
          var today = new Date();

          // check if user checked-in yesterday
          // but never checked-out
          // and change status to OUT
          if (
            user.val().status == "in" &&
            userDate.getDate() < today.getDate()
          ) {
            this.checkoutPerson(user.val().id);
          }

          if (user.val().status == "in") {
            this.firebase.names.push(user.val());
          }
        });
      });
    },

    // add a new user
    handleNameAdd() {
      let id = this.generateId();
      database.push({
        id: id,
        name: this.name,
        floor: this.floorSelected,
        createdAt: Date(),
        status: "in"
      });
      this.getFirebaseUsers();

      // update localStorage
      localStorage.setItem("userKey", id);
      localStorage.setItem("userStatus", "in");
      this.status = "in";
      this.showInfo = true;
    },

    //
    checkStatus() {
      // get user key
      var self = this;
      var key = localStorage.getItem("userKey");

      if (key) {
        var filteredRef = database.orderByChild("id").equalTo(key);
        var theId;

        filteredRef.on("value", function(response) {
          var obj = response.val();

          for (const property in obj) {
            theId = property;
            // update localStorage
            localStorage.setItem("userName", obj[theId].name);
            localStorage.setItem("userFloor", obj[theId].floor);
            localStorage.setItem("userStatus", obj[theId].status);

            // update status
            self.status = obj[theId].status;
            if (self.status === "in") {
              self.showInfo = true;
            }
          }
        });

        self.name = localStorage.getItem("userName");
        self.floorSelected = localStorage.getItem("userFloor");
      }
    },

    //
    checkOutBtn() {
      var getLocalId = localStorage.getItem("userKey");
      this.checkoutPerson(getLocalId);
    },

    //
    checkoutPerson(key) {
      var self = this;
      var filteredRef = database.orderByChild("id").equalTo(key);
      var theId;

      filteredRef.on("value", function(response) {
        var obj = response.val();

        for (const property in obj) {
          theId = property;
          // realtime db
          // database.child(theId).remove();
          database.child(theId).update({
            status: "out",
            checkeOutTime: Date()
          });

          // names obj
          Array.prototype.removeAt = function(id) {
            for (var item in this) {
              if (this[item].id == id) {
                this.splice(item, 1);
                return true;
              }
            }
            return false;
          };

          // remove from local array
          self.firebase.names.removeAt(key);

          // update view
          self.status = "out";
        }
      });
    },
    generateId() {
      let dt = new Date().getTime();
      return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g, c => {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
    }
  },
  mounted() {
    this.getFirebaseUsers();
    this.checkStatus();
  }
};
</script>

<style lang="scss">
// @import "~@/assets/styles/_fonts.scss";
@import "~@/assets/styles/_variables.scss";

/* defaults */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
}

html,
body {
  margin: 0;
  padding: 0;
  // font-family: "HelveticaNeue-Roman";
}

// styles
h3 {
  display: block;
  width: calc(100% - 90px);
  margin: 16vh auto 40px;
  font-size: 30px;
  color: $color-light;
  text-align: center;

  img {
    display: block;
    width: 245px;
    height: auto;
    margin: 15px auto 0;
  }
}

h5 {
  position: relative;
  display: block;
  width: calc(100% - 160px);
  margin: 40px 45px 0;
  // font-family: "HelveticaNeue-Bold";
  font-size: 50px;
  line-height: 50px;
  color: $color-blue;
  z-index: 10;

  + h5 {
    position: relative;
    display: block;
    margin-top: -70px !important;
    font-size: 250px;
    line-height: 290px;
    color: #0b17d9 !important;
    text-align: center;
    z-index: 5;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 100px);
  margin: 0 50px;

  &.table-info {
    p,
    span {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  p,
  span {
    color: $color-light;
  }
}

button {
  width: 20px;
  height: 20px;
  margin: -8px 0 0 20px;
  padding: 0;
  background-color: $color-light;
  border: 2px solid $color-dark;
}

input,
select {
  border: 1px solid $color-dark;
}

// check in view
.top-container {
  &--checkout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 340px;
    padding-top: 90px;
    background: $color-dark;
  }

  &--checkin {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 340px;
    background: $color-dark;
  }

  &--info {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: $color-dark;
    z-index: 100;

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 90vh;
      border-radius: 40px;
      background: $color-blue;

      h5 {
        display: block;
        width: 68%;
        margin: 20px auto;
        color: $color-light;
        -webkit-text-stroke: 0;
      }

      span {
        display: block;
        transform: scale(0.7);
      }

      button {
        margin-top: 20px !important;
        background-color: #fff !important;
        border: 0;
        color: #0b17d9 !important;
        text-transform: uppercase;
        line-height: 86px !important;
      }
    }
  }

  input,
  select,
  button {
    width: calc(100% - 100px);
    height: 40px;
    margin: 30px 50px 0;
    // font-family: "HelveticaNeue-Roman";
  }

  input,
  select {
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid $color-light;
    border-left: 0;
    border-radius: 0;
    font-size: 25px;
    line-height: 28px;
    color: $color-light;
    background: transparent;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: $color-light;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $color-light;
  }

  ::placeholder {
    color: $color-light;
  }

  button {
    height: 80px;
    margin-top: 50px;
    // font-family: "HelveticaNeue-Bold";
    font-size: 20px;
    line-height: 80px;
    border-radius: 40px;
    color: $color-light;
    background: $color-blue;
  }
}

// overview + checkout
.bottom-container {
  display: block;
  min-height: 90vh;
  padding: 10vh 0;
  background: $color-dark;

  h5 {
    margin: 0 auto;
    color: $color-light;
  }

  .checkout-btn {
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    width: 210px;
    height: 80px;
    margin: 50px auto 0;
    // font-family: "HelveticaNeue-Bold";
    font-size: 20px;
    line-height: 80px;
    border-radius: 40px;
    color: $color-light;
    background: $color-blue;
    box-shadow: 0px -5px 30px $color-dark;
  }
}
</style>
