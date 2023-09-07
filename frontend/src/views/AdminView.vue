<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>amount</th>
          <th>Catogary</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        <div>
          <!-- <tr>
            {{
              product.prodName
            }}
          </tr> -->
          <!-- <tr>
            {{
              product.quantity
            }}
          </tr>
          <tr>
            {{
              product.amount
            }}
          </tr>
          <tr>
            {{
              product.Catogary
            }}
          </tr>
          <tr>
            {{
              product.prodURL
            }}
          </tr> -->

          <button>edit</button>
          <button>delete</button>
        </div>
        <div>
          <!-- <tr>
            {{
              user.firstName
            }}
          </tr>
          <tr>
            {{
              user.lastName
            }}
          </tr>
          <tr>
            {{
              user.userAge
            }}
          </tr>
          <tr>
            {{
              user.gender
            }}
          </tr>
          <tr>
            {{
              user.userRole
            }}
          </tr>
          <tr>
            {{
              user.emailAdd
            }}
          </tr>
          <tr>
            {{
              user.userPass
            }}
          </tr> -->

          <button>edit</button>
          <button>delete</button>
        </div>
      </tbody>
    </table>
  </div>
</template>
   <script scoped>
export default {
  //    props: ["user"],
  //    methods: {
  //      async deleteUser(id) {
  //        try {
  //          await axios.delete(`${MyAPI}users`);
  //          this.$store.dispatch("getUsers");
  //          alert("User successfully deleted");
  //        } catch (err) {
  //          alert(err);
  //        }
  //      },
  //    },
};
</script>
   
   <style>
</style>