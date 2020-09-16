<template>
  <transition name="modalt">
    <div class="modal" v-show="showModel">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
        </div>
        <div class="modal-body">
          <!-- 新版插槽语法 -->
          <slot name="modalBody" :row="meta"></slot>
        </div>
        <div class="modal-footer">
          <a
            v-if="btnType==1"
            href="javascript:;"
            class="btn"
            v-on:click="$emit('submit')"
          >{{sureText}}</a>
          <a
            v-if="btnType==2"
            href="javascript:;"
            class="btn"
            v-on:click="$emit('cancel')"
          >{{cancelText}}</a>
          <div v-if="btnType==3" class="btn-group">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              v-on:click="$emit('cancel')"
            >{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  props: {
    // 弹窗类型
    modelType: {
      type: String,
      default: "form",
    },
    // 标题
    title: String,
    // 按钮类型,通过这个参数来确定显示的按钮组
    btnType: Number,
    // true btn
    sureText: {
      type: String,
      default: "确定",
    },
    // flase btn
    cancelText: {
      type: String,
      default: "取消",
    },
    // 是否展示
    showModel: Boolean,
    meta: {
      type: String,
      default: "父组件给插槽传递过来的值",
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.modal {
  @include position(fixed);
  overflow: hidden;
  z-index: 1000;
  // vue动画
  transition: all 0.5s;
  // 遮蔽罩
  .mask {
    @include position(fixed);
    background-color: $colorI;
    opacity: 0.5;
  }
  // 模态框主体
  .modal-dialog {
    @include position(absolute, 50%, 50%, auto, auto);
    z-index: 1001;
    transform: translate(-50%, -50%);
    width: 800px;
    background-color: $colorG;
    .modal-header {
      width: 800px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: $colorJ;
      font-size: 18px;
      font-weight: 400;
      color: #424242;
      vertical-align: middle;
    }
    .modal-body {
      padding: 42px 40px 54px;
      font-size: 14px;
      background-color: $colorG;
    }
    .modal-footer {
      width: 800px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background-color: $colorJ;
      .btn {
        font-size: 14px;
        display: inline-block;
        width: 160px;
        height: 40px;
        line-height: 40px;
        background-color: $colorA;
        color: $colorG;
        margin: 0 5px;
      }
      .btn-group {
        .btn-default {
          background-color: $colorD;
          &:hover {
            background-color: $colorB;
          }
        }
      }
    }
  }
}

//vue动画
// .modalt-enter-active {
//   transition: all 0.5s;
// }
// .modalt-leave-active {
//   transition: all 0.5s;
// }
.modalt-enter {
  top: -100%;
}
.modalt-leave-to {
  top: 100%;
}
// .modalt-enter-to,
// .modalt-leave {
//   top: 10%;
// }
</style>