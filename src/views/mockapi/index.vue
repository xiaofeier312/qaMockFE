<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="45">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Name" width="90" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="method" width="75" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.http_method }}</span>
        </template>
      </el-table-column>
      <el-table-column label="uri" width="105" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.uri }}</span>
        </template>
      </el-table-column>
      <el-table-column label="match_type" width="105" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.match_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Project" width="105" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.mockProject.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="priority" width="105" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.priority }}</span>
        </template>
      </el-table-column>
      <el-table-column label="description">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column label="lazy_time" width="105" align="center">
        <template slot-scope="scope">
          {{ scope.row.lazy_time }}
        </template>
      </el-table-column>
      <el-table-column label="resp_code" width="105" align="center">
        <template slot-scope="scope">
          {{ scope.row.resp_code }}
        </template>
      </el-table-column>
      <el-table-column label="resp_header" width="105" align="center">
        <template slot-scope="scope">
          {{ scope.row.resp_header }}
        </template>
      </el-table-column>
      <el-table-column label="resp_text">
        <template slot-scope="scope">
          {{ scope.row.resp_text }}
        </template>
      </el-table-column>
      <el-table-column label="resp_type" width="105" align="center">
        <template slot-scope="scope">
          {{ scope.row.resp_type }}
        </template>
      </el-table-column>
      <el-table-column label="status_switch" width="105" align="center">
        <template slot-scope="scope">
          {{ scope.row.status_switch }}
        </template>
      </el-table-column>

      <!-- <el-table-column class-name="status-col" label="Status" width="105" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { getAPI } from '@/api/mockAPI'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.getMockAPIService()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    async getMockAPIService() {
      this.listLoading = true
      const res = await getAPI()
      this.list = res
      this.listLoading = false
      console.log('--get mock api :')
      console.log(res)
      // getProject().then(response => {
      //   console.log('--get mock project:')
      //   console.log(response)
      // })
    }
  }
}
</script>
<style scoped>

</style>
