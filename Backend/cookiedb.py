import requests

class CookieDB:
  def __init__(self, token, url="https://cookiedb.com/api/db"):
    self.token = token
    self.url = url

  def create_table(self, name, schema={}):
    """
    Usage Example:

    ck.create_table("users", {
      "name": "string",
      "description": "nullable string",
      "age": "number"
    })
    """
    r = requests.post(
      url=f"{self.url}/create/{name}",
      headers={"Authorization": f"Bearer {self.token}"},
      json=schema,
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

  def edit_table(self, name, options={}):
    """
    Usage Example:

    ck.edit_table("users", {
      "name": "old_users",
      "schema": {
        "name": "string"
      },
      "alias": {
        "name": "$name"
      }
    })
    """
    r = requests.post(
      url=f"{self.url}/edit/{name}",
      headers={"Authorization": f"Bearer {self.token}"},
      json=options,
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

  def drop_table(self, name):
    """
    Usage Example:

    ck.drop_table("users")
    """
    r = requests.post(
      url=f"{self.url}/drop/{name}",
      headers={"Authorization": f"Bearer {self.token}"},
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

  def meta_table(self, name):
    """
    Usage Example:

    print(ck.meta_table("users"))
    """
    r = requests.post(
      url=f"{self.url}/meta/{name}",
      headers={"Authorization": f"Bearer {self.token}"},
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

    return data

  def meta(self):
    """
    Usage Example:

    print(ck.meta())
    """
    r = requests.post(
      url=f"{self.url}/meta", headers={"Authorization": f"Bearer {self.token}"}
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

    return data

  def insert(self, name, document):
    """
    Usage Example:

    ck.insert('users', {
      "name": "cookie_fan",
      "description": None,
      "age": 20
    })
    """
    r = requests.post(
      url=f"{self.url}/insert/{name}",
      headers={"Authorization": f"Bearer {self.token}"},
      json=document,
    )

    data = r.text

    try:
      data = r.json()

      if "error" in data:
        raise Exception(data["error"])

      return data
    except requests.exceptions.JSONDecodeError:
      return data

  def get(self, name, key):
    """
    Usage Example:

    print(ck.get("users", "b94a8779-f737-466b-ac40-4dfb130f0eee"))
    """
    r = requests.post(
      url=f"{self.url}/get/{name}/{key}",
      headers={"Authorization": f"Bearer {self.token}"},
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

    return data

  def delete(self, name, key):
    """
    Usage Example:

    ck.delete("users", "b94a8779-f737-466b-ac40-4dfb130f0eee")
    """
    r = requests.post(
      url=f"{self.url}/delete/{name}/{key}",
      headers={"Authorization": f"Bearer {self.token}"},
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

  def delete_by_query(self, name, where):
    """
    Usage Example:

    ck.delete_by_query("users", "starts_with($name, 'cookie')")
    """
    r = requests.post(
      url=f"{self.url}/delete/{name}",
      headers={"Authorization": f"Bearer {self.token}"},
      json={"where": where},
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

  def update(self, name, key, document):
    """
    Usage Example:

    ck.update("users", "starts_with($name, 'cookie')")
    """
    r = requests.post(
      url=f"{self.url}/update/{name}/{key}",
      headers={"Authorization": f"Bearer {self.token}"},
      json=document,
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

    return data

  def select(self, name, where="", options={}):
    """
    Usage Example:

    print(ck.select("users", "starts_with($name, 'cookie')"))
    """
    r = requests.post(
      url=f"{self.url}/select/{name}",
      headers={"Authorization": f"Bearer {self.token}"},
      json={
        "where": where,
        "max_results": options["max_results"]
        if "max_results" in options
        else -1,
        "expand_keys": options["expand_keys"]
        if "expand_keys" in options
        else False,
        "order": options["order"] if "order" in options else None,
      },
    )
    data = r.json()

    if "error" in data:
      raise Exception(data["error"])

    return data
