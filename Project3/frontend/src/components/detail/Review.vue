<template>
  <div>
    <b>Review Board</b>
    <v-simple-table>
      <thead>
      <tr>
        <th class="primary--text">
          글 번호
        </th>
        <th class="primary--text">
          제목
        </th>
        <th class="primary--text">
          작성자
        </th>
        <th class="primary--text">
          등록일자
        </th>
        <th class="text-right primary--text">
          댓글수
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Dakota Rice</td>
        <td>Niger</td>
        <td>Oud-Turnhout</td>
        <td class="text-right">
          $36,738
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Minverva Hooper</td>
        <td>Curaçao</td>
        <td>Sinaas-Waas</td>
        <td class="text-right">
          $23,789
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Sage Rodriguez</td>
        <td>Netherlands</td>
        <td>Baileux</td>
        <td class="text-right">
          $56,142
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Philip Chaney</td>
        <td>Korea, South</td>
        <td>Overland Park</td>
        <td class="text-right">
          $38,735
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>Doris Greene</td>
        <td>Malawi</td>
        <td>Feldkirchen in Kärnten</td>
        <td class="text-right">
          $63,542
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Mason Porter</td>
        <td>Chile</td>
        <td>Gloucester</td>
        <td class="text-right">
          $78,615
        </td>
      </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "review"
}
</script>

<style>
.base{
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
.card{
  grid-area : 10/2/100/80;
}
</style>