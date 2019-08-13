<template>
  <s-grid>
    <s-row>
      <s-col>
        <s-toast width="300px" buttonless>
          hello world
        </s-toast>
        <s-toast width="300px">
          hello world
        </s-toast>
        <s-toast width="300px" primary>
          hello world
        </s-toast>
        <s-toast width="300px" success>
          hello world
        </s-toast>
        <s-toast width="300px" warning>
          hello world
        </s-toast>
        <s-toast width="300px" error @clear="showAlert">
          hello world
        </s-toast>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
import { SToast } from '@/components/comps/toast';
export default {
  methods: {
    showAlert() {
      alert('Hi');
    }
  }
};
</script>
