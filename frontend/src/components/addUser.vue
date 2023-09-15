<template>
    <div>
      <div class="container flex-container">
        <button type="button" class="custom-button" data-toggle="modal" data-target="#exampleModaluser" data-whatever="@mdo">Add</button>
  
        <div class="modal" id="exampleModaluser">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">New message</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name</label>
                    <input type="text" class="form-control" id="recipient-name" autocomplete="off" required name="FirstName" v-model="user.FirstName">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Surname</label>
                    <input type="text" class="form-control" id="message-text" autocomplete="off" required name="LastName" v-model="user.LastName">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">age</label>
                    <input type="text" class="form-control" id="message-text" autocomplete="off" required name="UserEmail" v-model="user.userAge">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">gender</label>
                    <input type="text" class="form-control" id="message-text" autocomplete="off" required name="UserEmail" v-model="user.gender">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Email</label>
                    <input type="text" class="form-control" id="message-text" autocomplete="off" required name="UserEmail" v-model="user.UserEmail">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Password</label>
                    <input type="text" class="form-control" id="message-text" autocomplete="off" required name="UserPass" v-model="user.UserPass">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Profile</label>
                    <input type="text" class="form-control" id="message-text" autocomplete="off" required name="UserProfile" v-model="user.UserProfile">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="custom-button" data-dismiss="modal">Close</button>
                <button @click="addUser" type="button" class="custom-button" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'AddUserComp',
    props: ['ToggleModal'],
    data() {
      return {
          user: {
          // Make sure to include a prop for prodID or remove it if not needed
            FirstName: '',
            LastName: '',
            userAge:'',
            gender:'',
            UserEmail: '', // 'category' should be 'Category' to match the v-model
            UserPass: '',
            UserProfile: '',
          }
        
      };
    },
    methods: {
      addUser() {
        this.$store.dispatch("addUser",this.user)
      },
    }
  };
  </script>
  
  <style scoped>

  </style>
  