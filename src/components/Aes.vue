<template>
    <div class="hello">
       
        <input type="text" v-model="name"/>
        <p>加密: "{{ EncryptMsg }}"</p>
        <p>解密: "{{ DecryptMsg }}"</p>
        <p>签名: "{{ getSign }}"</p>
    </div>
</template>

<script>

import utils from '../utils/utils.js'


export default {
    name: 'test',
    components: {
        utils
    },
    props: {
            msg: String
    },
    data(){
        return {
            name:'连建成'
        }
    },
    computed:{ // dom 加载后立刻执行
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.name.split('').reverse().join('')
        },
        EncryptMsg:function(){
          return utils.Encrypt(this.name);
        },
        DecryptMsg:function(){
          return utils.Decrypt(utils.Encrypt(this.name));
        },
        getSign:function(){
          return utils.getSign(this.name,'1563342403');
        }
    },
    methods:{ // 需要出发执行
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
    .hello{
        width:50%;
        margin: 0 auto;
    }
  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(70% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
   button {
    width: calc(30% );
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #ff8a00;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float:right;
  cursor:pointer;
}
</style>
