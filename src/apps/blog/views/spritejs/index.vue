<template>
  <div class="canvas">
    <!--
    <canvas
      ref="canvas"
      :style="{
        width: `${canvasWidth}px`,
        height: `${canvasHeight}px`
      }"
    ></canvas>
    -->
    <canvas
      ref="canvas"
      :width="`${canvasWidth}px`"
      :height="`${canvasHeight}px`"
    ></canvas>
  </div>
</template>

<script>
const CANVAS_HEADER_HEIGHT = 60
const TABLE_CELL_WIDTH = 40
const TABLE_CELL_HEIGHT = 80

export default {
  name: 'spritejs',
  data () {
    return {
      canvas: null,
      // 与会公司
      company: [
        {
          name: '百度',
          code: 'baidu'
        },
        {
          name: '阿里巴巴',
          code: 'alibaba'
        },
        {
          name: '腾讯',
          code: 'tencent'
        },
        {
          name: '华为',
          code: 'huawei'
        },
        {
          name: '京东',
          code: 'jd'
        },
        {
          name: '拼多多',
          code: 'pdd'
        }
      ],
      // 会议开始结束时间
      timeRange: [
        '2020-08-15 09:15:00',
        '2020-08-17 22:30:00'
      ],
      schedules: [
        {
          name: '某某日程111',
          companyCode: 'baidu',
          timeRange: []
        }
      ]
    }
  },
  computed: {
    columnNumber () {
      return 20
    },
    rowNumber () {
      return this.company.length
    },
    canvasWidth () {
      return this.columnNumber * TABLE_CELL_WIDTH
    },
    canvasHeight () {
      return this.rowNumber * TABLE_CELL_HEIGHT + CANVAS_HEADER_HEIGHT
    }
  },
  mounted () {
    this.$nextTick(() => {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')

      // 画布填充颜色
      ctx.fillStyle = '#F8FCFD'
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

      // 线条样式
      ctx.lineWidth = 1
      ctx.strokeStyle = '#E8EAEC'

      // 画公司横线
      ctx.beginPath()
      ctx.moveTo(0, CANVAS_HEADER_HEIGHT + 0.5)
      ctx.lineTo(this.canvasWidth, CANVAS_HEADER_HEIGHT + 0.5)
      ctx.stroke()
      for (let i = 1; i < this.columnNumber; i++) {
        ctx.beginPath()
        ctx.moveTo(0, (CANVAS_HEADER_HEIGHT + 0.5) + i * TABLE_CELL_HEIGHT)
        ctx.lineTo(this.canvasWidth, (CANVAS_HEADER_HEIGHT + 0.5) + i * TABLE_CELL_HEIGHT)
        ctx.stroke()
      }

      // 画时间竖线

    })
  }
}
</script>

<style lang="scss">
.canvas canvas {
  border: 1px solid #F7F7F7;
  margin: 40px 100px;
}
</style>
