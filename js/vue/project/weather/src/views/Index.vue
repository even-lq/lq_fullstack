<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>

    <div class="city-info">
      <p class="city">{{ mapData.city }}</p>
      <p class="weather">{{ mapData.weather }}</p>
      <h2 class="temperature">
        <em>{{ mapData.temperature }}</em
        >℃
      </h2>
      <div class="detail">
        <span>风力:{{ mapData.windPower }}</span> |
        <span>风向:{{ mapData.windDirection }}</span> |
        <span>空气湿度:{{ mapData.humidity }}%</span>
      </div>
    </div>

    <div class="future">
      <div class="group">
        明天:
        <span class="tm">白天:{{ futureMapData[0].dayTemp }} {{ futureMapData[0].dayWeather }} {{ futureMapData[0].dayWindDir }} {{ futureMapData[0].dayWindPower }}</span>
        <span class="tm">夜间:{{ futureMapData[0].nightTemp }} {{ futureMapData[0].nightWeather }} {{ futureMapData[0].nightWindDir }} {{ futureMapData[0].nightWindPower }}</span>
      </div>

      <div class="group">
        后天:
        <span class="tm">白天:{{ futureMapData[1].dayTemp }} {{ futureMapData[1].dayWeather }} {{ futureMapData[1].dayWindDir }} {{ futureMapData[0].dayWindPower }}</span>
        <span class="tm">夜间:{{ futureMapData[1].nightTemp }} {{ futureMapData[1].nightWeather }} {{ futureMapData[1].nightWindDir }} {{ futureMapData[0].nightWindPower }}</span>
      </div>
    </div>

    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTime: "",
      mapData: {},
      futureMapData: []
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
  },
  mounted() {
    this.initMap();
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      // 获取当前城市
      let _this = this;
      var map = new AMap.Map(_this.$refs.mapContainer, {
        resizeEnable: true,
      });
      AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            console.log(result);
            _this.getCurrentCityData(result.city);
          }
        });
      });
    },
    getCurrentCityData(cityName) {
      let _this = this;
      // 查询天气
      //加载天气查询插件
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          console.log(err, data);
          _this.mapData = data;
        });

        //执行实时天气信息查询
        weather.getForecast(cityName, function (err, data) {
          console.log(err, data);
          _this.futureMapData = data.forecasts
        });

      });
    },
  },
};
</script>

<style lang="less">
.container {
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info {
    text-align: center;
    .temperature {
      font-size: 26px;
      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }
  .future {
    margin-top: 30px;
    padding: 0 10px;
    .group {
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.3);
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      margin-bottom: 10px;
      padding: 0 10px;
      .tm {
        color: #fff;
      }
    }
  }
  // .map-container {
  //   height: 300px;
  // }
}
</style>
