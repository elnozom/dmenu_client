<template>
  <div :class="{'isForm' : isForm}" class="asdasd">
    <simple-modal
      v-model="active"
      :title="`Welcome ${name}`"
    >
      <template slot="body" v-if="isForm"> 
        <div
          class="form"
          
        >
          <form class="guest-form">
            <div class="input">
              <input
                class="guest-input"
                v-model="form.GuestName"
                placeholder="name"
              >
            </div>
            <div class="input">
              <input
              class="guest-input"
                v-model="form.GuestPhone"
                placeholder="phone"
              >
            </div>
            <div >
              <a
              class="app-btn"
                @click.prevent="create"
              >submit</a>
            </div>
          </form>
        </div>
        <!-- <input>
        <p>Hello you</p> -->
      </template>

    </simple-modal>
  </div>
</template>
 
<script>
import SimpleModal from "simple-modal-vue";
import { DeviceUUID } from "@/core/device";
import GuestRepo from "@/modules/guest/guest.repo";
import {openSnack} from '@/core/snack'
let repo = new GuestRepo();
export default {
  name: "SimpleModalExample",
  components: { SimpleModal },
  computed: {
    active: {
      get: function () {
        return this.$store.getters["ui/guestModal"];
      },
      set: function (val) {
        this.$store.commit("ui/setGuestModal", val);
      },
    },
    name: {
      get: function () {
        return this.$store.getters["guest/name"];
      },
      set: function (val) {
        this.$store.commit("guest/setName", val);
      },
    },
  },
  data() {
    return {
      isForm: false,
      form: {
        GuestName: "",
        GuestPhone: "",
      },
    };
  },
  methods: {
    create() {
      let deviceId = new DeviceUUID().get();
      const req = {
        DeviceId: deviceId,
        GuestName: this.form.GuestName,
        GuestPhone: this.form.GuestPhone,
      };
        console.log(req)
      repo.create(req).then(() => {
        openSnack("success" , "You data saved succesfully enjoy")
        this.active = false
      });
    },
    find() {
      if(this.name != '') return
      let deviceId = new DeviceUUID().get();
      repo.findByDevice(deviceId).then((res) => {
        this.name = res.GuestName;
        this.isForm = res.GuestName == "";
      });
    },
  },
  mounted() {
    this.find();
  },
};
</script> 

<style>
.form {
  display: flex;
}
.vsm-modal-body{
  display: none;
  background-color: var(--color-white);
}
.guest-input{
  background-color: var(--color-white-lighten);
  color: var(--colors-font);
  height: 30px;
  border: none;
  border-radius: 15px;
  padding-left: 20px;
}
.isForm .vsm-modal-body{
  display: block !important;
}
.vsm-modal-header{
  background-color:var(--color-white-lighten) !important ;
  color : var(--color-black);
}
</style>