<template>
  <s-grid>
    <h2>Forms</h2>
    <s-form-grp title="Name" placeholder="Name" />
    <s-form-grp title="Email" placeholder="Email" />
    <h2>Form textarea</h2>
    <s-form-grp title="Message" placeholder="Textarea" textarea />
    <h2>Form selet</h2>
    <s-form-grp select placeholder="Choose an option">
      <template v-slot:select="">
        <option value="slack">Slack</option>
        <option value="skype">Skype</option>
        <option value="hipchat">Hipchat</option>
      </template>
    </s-form-grp>
    <s-form-grp select multiple placeholder="choose an option">
      <template v-slot:select="">
        <option value="slack">Slack</option>
        <option value="skype">Skype</option>
        <option value="hipchat">Hipchat</option>
      </template>
    </s-form-grp>
    <h2>Form radio</h2>
    <s-form-grp title="Gender">
      <template v-slot:input>
        <s-radio label="Male" checked />
        <s-radio label="Felmale" />
      </template>
    </s-form-grp>
    <h2>Form switch</h2>
    <s-form-grp switch label="Send me emails with news and tips" />
    <s-form-grp
      switch
      label="Send me emails with news and tips"
      :checked="true"
    />
    <h2>Form checkbox</h2>
    <s-form-grp checkbox label="Remember me" />
    <s-form-grp checkbox label="Remember me" :checked="true" />
    <s-form-grp indeterminate label="Select all" checkbox />
    <h2>Inline forms</h2>
    <s-form-grp>
      <template v-slot:input>
        <s-radio label="Male" inline checked />
        <s-radio label="Female" inline />
      </template>
    </s-form-grp>

    <s-form-grp>
      <template v-slot:input>
        <s-checkbox label="Checkbox 1" inline />
        <s-checkbox label="Checkbox 2" inline :checked="true" />
      </template>
    </s-form-grp>

    <s-form horizontal>
      <s-form-grp title="Name" placeholder="Name" lhs="2" rhs="10" />
      <s-form-grp title="Email" placeholder="Name" lhs="2" rhs="10" />
      <s-form-grp title="Gender" lhs="2" rhs="10">
        <template v-slot:input>
          <s-radio inline label="Male" />
          <s-radio inline label="Female" checked />
        </template>
      </s-form-grp>
      <s-form-grp
        select
        multiple
        lhs="2"
        rhs="10"
        title="Source"
        :items="[
          { text: 'Slack', value: 'slack' },
          { text: 'Skype', value: 'skype' },
          { text: 'Hipchat', value: 'Hipchat' }
        ]"
      />
      <s-form-grp
        lhs="2"
        rhs="10"
        switch
        label="Send me emails with news and tips"
      />
      <s-form-grp
        lhs="2"
        rhs="10"
        textarea
        title="Message"
        placeholder="Textarea"
      />
      <s-form-grp lhs="2" rhs="10" checkbox label="Remmeber me" />
    </s-form>

    <h2>Form sizes</h2>
    <s-form-grp title="label" sm placeholder="Name" />
    <s-form-grp placeholder="Choose an option" sm select />

    <s-form-grp title="label" lg placeholder="Name" />
    <s-form-grp placeholder="Choose an option" lg select />

    <h2>Form icons</h2>
    <s-input iconLeft="arrow-right" placeholder="Name" sm />
    <s-input iconLeft="arrow-right" placeholder="Name" />
    <s-input iconLeft="arrow-right" placeholder="Name" lg />

    <s-input iconRight="check" placeholder="Name" sm />
    <s-input iconRight="check" placeholder="Name" />
    <s-input iconRight="check" placeholder="Name" lg />

    <h2>loading</h2>
    <s-input placeholder="Name" loading sm />
    <s-input placeholder="Name" loading />
    <s-input placeholder="Name" loading lg />

    <s-form horizontal>
      <h2>Input types</h2>
      <s-form-grp
        lhs="2"
        rhs="10"
        title="Email"
        type="email"
        value="spectre@exmaple.com"
      />
      <s-form-grp
        lhs="2"
        rhs="10"
        title="URL"
        type="url"
        value="https://google.com"
      />
      <s-form-grp
        lhs="2"
        rhs="10"
        title="Search"
        type="search"
        placeholder="Search"
      />
      <s-form-grp
        lhs="2"
        rhs="10"
        title="Tel"
        type="tel"
        value="1-(888)-888-8888"
      />
      <s-form-grp
        lhs="2"
        rhs="10"
        title="Password"
        type="password"
        value="Secret"
      />
      <s-form-grp lhs="2" rhs="10" title="Number" type="number" value="66" />
      <s-form-grp
        lhs="2"
        rhs="10"
        title="Date"
        type="date"
        value="1970-01-01"
      />
      <s-form-grp lhs="2" rhs="10" type="color" title="Color" value="#00ff33" />
      <s-form-grp lhs="2" rhs="10" type="file" title="File" v-model="test" />
    </s-form>

    <h2>Input groups</h2>

    <s-input-grp>
      <s-input placeholder="username" />
      <s-select :items="[{ text: 'Slack', value: 'slack' }]" value="slack" />
    </s-input-grp>

    <s-input-grp addonLeft="slack.com">
      <s-input placeholder="site name" />
      <s-btn input-grp primary>Submit</s-btn>
    </s-input-grp>

    <s-input-grp lg>
      <s-input placeholder="username" lg />
      <s-select :items="[{ text: 'Slack', value: 'slack' }]" lg value="slack" />
    </s-input-grp>

    <s-input-grp>
      <s-checkbox label="" />
      <s-input placeholder="username" lg />
    </s-input-grp>

    <s-form-grp
      title="Name"
      placeholder="Name"
      hint="The name is valid"
      success
    />
    <s-form-grp
      title="Password"
      placeholder="Password"
      hint="Passwords must have at least 8 characters"
      error
    />

    <h2>Select</h2>

    <s-form-grp
      select
      placeholder="Choose an option"
      hint="The optin is invalid."
      error
    />
    <s-form-grp
      select
      placeholder="Choose an option"
      hint="The optin is invalid."
      success
    />

    <h2>Checkbox, Radio and Switch (Error state only)</h2>
    <s-form-grp label="I'm not a robot." checkbox error :checked="true" />
    <s-form-grp label="Male" radio error :checked="true" />
    <s-form-grp label="Female" radio error :checked="false" />
    <s-form-grp
      label="Send me emails with news and tips"
      switch
      :checked="true"
      error
    />

    <s-form horizontal disabled>
      <s-form-grp
        type="email"
        title="Email Address"
        :lhs="{ col: 3, smCol: 4 }"
        :rhs="{ col: 9, smCol: 8 }"
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
      <s-form-grp title="hello world" hint="this is hint" lhs="3" rhs="9">
        <template v-slot:input>
          <s-input-grp addonLeft="Email" sm>
            <s-input placeholder="test@gmail.com" type="email" sm />
          </s-input-grp>
        </template>
      </s-form-grp>
    </s-form>
  </s-grid>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      inputText: '',
      checked: '',
      mchecked: [],
      gender: 'male',
      test: ''
    };
  },
  computed: {},
  methods: {}
};
</script>
