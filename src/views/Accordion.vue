<template>
  <s-grid>
    <s-row>
      <s-col>
        <s-accordion for="accordion-1">
          <template #header>
            <s-icon icon="arrow-right" class="mr-1" />
            Elements
          </template>
          <template #body>
            <s-menu nav>
              <s-menu-item title="component 1" />
              <s-menu-item title="component 2" />
            </s-menu>
          </template>
        </s-accordion>
        <s-accordion for="accordion-2">
          <template #header>
            <s-icon icon="arrow-right" class="mr-1" />
            Elements
          </template>
          <template #body>
            <s-menu nav>
              <s-menu-item title="component 1" />
              <s-menu-item title="component 2" />
            </s-menu>
          </template>
        </s-accordion>
      </s-col>
      <s-col>
       <s-accordion for="accordion-3" mut>
          <template #header>
            <s-icon icon="arrow-right" class="mr-1" />
            Elements
          </template>
          <template #body>
            <s-menu nav>
              <s-menu-item title="component 1" />
              <s-menu-item title="component 2" />
            </s-menu>
          </template>
        </s-accordion>
        <s-accordion for="accordion-4" mut>
          <template #header>
            <s-icon icon="arrow-right" class="mr-1" />
            Elements
          </template>
          <template #body>
            <s-menu nav>
              <s-menu-item title="component 1" />
              <s-menu-item title="component 2" />
            </s-menu>
          </template>
        </s-accordion>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {

}
</script>
