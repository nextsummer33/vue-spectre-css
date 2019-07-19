<template>
  <s-grid>
    <s-form-grp title="Fruit" hint="Beautiful" id="a" v-model="inputText" />
    <s-form-grp title="Long text" textarea v-model="inputText" rows="3" />
    <p v-text="inputText" />
    <s-form-grp title="Fruit" hint="Beautiful" id="c" type="number" />
    <s-form-grp id="b" switch hint="a switch" />
    <s-form-grp hint="Please fill the field.">
      <s-input placeholder="name" />
    </s-form-grp>

    <s-form horizontal>
      <s-form-grp
        type="email"
        title="Email Address"
        :lhs="{col:3,smCol:4}"
        :rhs="{col:9,smCol:8}"
      />
      <s-form-grp
        lhs="3"
        rhs="9"
        select
        v-model="mchecked"
        multiple
        title="Email Address"
        placeholder="Select a value"
      >
        <template v-slot:select>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
          <option>Four</option>
        </template>
      </s-form-grp>
      <s-form-grp :items="[{text: 'One', value: '1'}]" select title="Single" />
      {{ mchecked }}
      <s-form-grp lhs="3" rhs="9" title="Username">
          <s-input slot="input" type="email" placeholder="hello" />
      </s-form-grp>
      <s-form-grp lhs="3" rhs="9" title="Gender" hint="select a gender">
        <template v-slot:input>
          <s-radio
            v-model="gender"
            value="male"
            label="Male"
            name="gender"
            inline
          />
          <s-radio
            v-model="gender"
            value="Female"
            label="Female"
            name="gender"
            inline
          />
        </template>
      </s-form-grp>
      <s-form-grp lhs="3" rhs="9" title="Hello" error>
        <template v-slot:input>
          <s-radio label="World" inline />
          <s-radio label="World2" inline />
        </template>
      </s-form-grp>
    </s-form>
  </s-grid>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      inputText: '',
      checked: '',
      mchecked: [],
      gender: 'male'
    };
  },
  computed: {},
  methods: {}
};
</script>
