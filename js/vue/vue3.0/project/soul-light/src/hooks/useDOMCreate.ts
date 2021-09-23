import { onUnmounted } from 'vue';

function useDOMCreate(nodeId: string) {
  const app = document.getElementById('app');
  const node = document.createElement('div');
  node.id = nodeId;
  node.setAttribute('class', nodeId);
  document.body.insertBefore(node, app);
  onUnmounted(() => {
    document.body.removeChild(node);
  })
}

export default useDOMCreate;
