<script>
  let files;

  let connection_status;
  let connection_error;

  async function heartbeat() {
    await fetch("http://localhost:4000/heartbeat").
      then(res => res.json()).
      then(json => {
        connection_status = json.status
        connection_error = undefined;
      }).
      catch(err => { connection_error = err })
	}

  // heartbeat() every 2s, starting immediately
  heartbeat()
	setInterval(heartbeat, 2000)

</script>

{#if connection_error}
  <div class="error"></div>
{:else if connection_status == "ok"}
  <label for="file-input" class="ready"></label>
  <input id="file-input" type="file" bind:files>
{:else}
  <div class="loading"></div>
{/if}


<style>
  div, label {
    width: 50px;
    height: 50px;
  }

  label.ready {
    cursor: pointer;
    background-color: green;
  }

  div.error {
    background-color: red;
  }

  div.loading {
    background-color: blue;
  }

  input {
    display: none;
  }
</style>
