<template>
  <div>
    <a-button class="scoped-page-title" type="link">FrontSDK</a-button>
    <a-row style="width: 100%" class="scoped-page-input" >
      <a-input placeholder="查找API" style="width: 80%" @change="handleSearchQueryChange" allowClear>
        <a-icon slot="prefix" type="appstore" />
      </a-input>
    </a-row>
    <a-divider />
    <div class="scoped-sider-tree">
      <a-tree
      :show-line="true"
      show-icon
      :replaceFields="{ title: 'text', key: 'id' }"
      defaultExpandAll
      ref="tree"
      :tree-data="treeData"
      >
        <a-icon slot="switcherIcon"
          type="down-square" style="font-size: 1rem"
          twoToneColor="#F5222d"
          theme="twoTone"/>
        <a-icon slot="api" type='bug' theme="twoTone" twoToneColor="#409EFF" />
      </a-tree>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import treeData from '../../data';

@Component
export default class Sider extends Vue {
  public treeData: object[] = treeData;

  private searchQuery!: string;

  public created() {}

  private handleSearchQueryChange(event: InputEvent): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/config/var.scss';

.scoped-page-title {
  font-weight: bold;
  color: $web-primary-blue-color;
  font-size: 18px;
  margin: 0 auto;
  width: 100%;
}
.scoped-page-input {
  display: flex;
  justify-content: center;
}
.scoped-sider-tree {
  margin: 0 1.5rem;
}
::v-deep .ant-divider-horizontal {
  margin: 1rem 0;
}

::v-deep .ant-tree-node-content-wrapper {
  font-weight: 600;
}
</style>
