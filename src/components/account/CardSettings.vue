<template>
  <div class="card-settings">
    <div class="box">
      <div class="intro">
        <h1>Cards Settings</h1>
        <router-link to="/account">
          <i class="fas fa-angle-left"></i>
          back to my account
        </router-link>
      </div>
      <h4>Cards</h4>
      <div class="info">
        <div class="photo">
          <img src="@/assets/img/card.jpg">
        </div>
        <div class="gear">
          <h4>Frank’s Business card </h4>
          <div class="gear__item">
            <i class="fas fa-lock"></i>
            <div class="gear__item--title">
              <span>Lock card</span>
              <p>Lock your card within seconds</p>
            </div>
          </div>
          <div class="gear__item"> 
            <i class="far fa-envelope"></i>
            <div class="gear__item--title">
              <span> Reorder card</span>
              <p> Stolen, Lost, or broken card?</p>
            </div>
          </div>
          <div class="gear__item"> 
            <i class="fas fa-undo"></i>
            <div class="gear__item--title">
              <span> Reset PIN</span>
              <p> Change your card PIN</p>
            </div> 
          </div>
        </div>
      </div>
      <div class="bottom-shelf">
        <div class="usage">
          <ul class="box-shadow">
            <li>
              <div class="usage__text">
                <span>ATM Withdrawals</span>
                <p>Allow cash Withdrawals from ATMs </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
            <li>
              <div class="usage__text">
                <span>Online payments</span>
                <p>Allow payments online? </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
            <li>
              <div class="usage__text">
                <span>Payments abroad</span>
                <p>Allow payments in other countries? </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="limits">
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>
export default {
  name: "CardSettings"
};
</script>

<style lang="scss" scoped>
.card-settings {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfbfb;
  height: 100%;

  .info {
    display: flex;
    .photo {
      img {
        width: 450px;
        height: 280px;
      }
    }
    .gear {
      margin-left: 20px;
      h4 {
        margin: 0 0 15px 0;
      }
      &__item {
        display: flex;
        cursor: pointer;
        margin: 20px 0;
        &:hover span {
          border-bottom: 3px solid deepskyblue;
        }
        &--title {
          p {
            margin-top: 5px;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.5);
          }
        }
        i {
          font-size: 34px;
          padding: 10px 20px;
        }
      }
    }
  }
  .bottom-shelf {
    display: flex;
    margin-top: 50px;
  }
  .usage {
    width: 50%;
    ul {
      background: white;
      border-radius: 8px;
      padding: 0px;
      width: 90%;
      li {
        background-color: white;
        display: flex;
        height: 60px;
        padding-left: 0px;
        padding: 14.4px 18px;
        box-sizing: content-box;
        border-bottom: 1px solid lightgray;
        list-style: none;
        &:last-child {
          border: none;
        }
        .switch {
          position: relative;
          width: 60px;
          height: 34px;
          margin: 20px;
          flex-grow: 1;
          input {
            display: none;
            &:checked + .slider {
              background-color: deepskyblue;
            }
            &:focus + .slider {
              box-shadow: 0 0 1px deepskyblue;
            }
            &:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            }
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 34px;
            &:before {
              position: absolute;
              content: "";
              height: 28px;
              width: 28px;
              left: 5px;
              bottom: 3px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 50%;
            }
          }
        }
        .usage__text {
          flex-grow: 100;
          p {
            color: rgba(0, 0, 0, 0.5);
            font-size: 12px;
          }
        }
      }
    }
  }
  .limits {
    border: 1px solid deeppink;
    width: 50%;
  }
}
</style>
