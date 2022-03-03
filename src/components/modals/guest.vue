<template>
  <div>
    <simple-modal
      v-model="active"
      :title="`Welcome ${name}`"
    >
      <template slot="body">

        <div
          class="form"
          v-if="isForm"
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
  },
  data() {
    return {
      isForm: false,
      name: "",
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
      let deviceId = new DeviceUUID().get();
      repo.findByDevice(deviceId).then((res) => {
        console.log(res);
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
</style>