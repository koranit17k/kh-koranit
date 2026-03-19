<template>
  <details :class="['collapsible', type]">
    <summary>
      <span class="summary-content">
        <slot name="summary">{{ title }}</slot>
      </span>
    </summary>
    <div class="content">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </details>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Click to expand'
  },
  type: {
    type: String,
    default: 'default' // success, warning, danger
  }
})
</script>

<style scoped>
.collapsible {
  border: 1px solid var(--elements-border-primary-default, #e0e0e0);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  background: var(--elements-bg-secondary-default, #f9f9f9);
  transition: all 0.2s ease;
}

.collapsible[open] {
  padding-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 0;
  user-select: none;
  list-style: none;
  display: flex;
  align-items: center;
  color: var(--elements-text-primary-default, #333);
}

summary::-webkit-details-marker {
  display: none;
}

summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.2s ease;
  font-size: 0.8em;
}

details[open] summary::before {
  transform: rotate(90deg);
}

.summary-content {
  flex: 1;
}

.content {
  margin-top: 0.75rem;
  border-top: 1px solid var(--elements-border-primary-default, #eee);
  padding-top: 0.75rem;
}

/* Types */
.success { border-left: 4px solid #10b981; }
.warning { border-left: 4px solid #f59e0b; }
.danger { border-left: 4px solid #ef4444; }

.success summary { color: #059669; }
.warning summary { color: #d97706; }
.danger summary { color: #dc2626; }
</style>
