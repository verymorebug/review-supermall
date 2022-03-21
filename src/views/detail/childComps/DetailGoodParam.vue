<template>
  <div class = "good-param">

    <div class = "good-size" v-for = "table in goodParam.tables">

      <table class = "size-table" >

        <tr v-for = "items in table">

          <td v-for = "item in items">{{item}}</td>

        </tr>

      </table>

    </div>

    <table class = "info-table">

      <tr v-for = "item in goodParam.info">

        <td>{{item.key}}</td>
        <td style="color: #ff5777">{{item.value}}</td>

      </tr>

    </table>


  </div>
</template>

<script>
export default {

  name: "DetailGoodParam",
  props:{

    goodParam:Object,

    default:{

      return:{}

    }

  }

}
</script>

<style scoped>
  .good-param{

    /*background: #ff5777;*/
    width: 100%;
    padding: 5px;

  }

  .good-size,.good-info{

    width: 100%;
    background: white;


  }
  .size-table{

    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-collapse:collapse;     /*合并相邻的单元格*/

  }
  .size-table tr{

    height: 50px;

  }
  .size-table td{

    border-bottom: 1px solid rgba(100,100,100,0.2);

  }

  .info-table{

    margin-top: 20px;
    width: 100%;
    height: 100%;;
    border-collapse:collapse;     /*合并相邻的单元格*/

  }

  .info-table tr{

    height: 50px;

  }

  .info-table td{

    min-width: 100px;
    height: 40px;
    border-bottom: 1px solid rgba(100,100,100,0.2);

  }

</style>